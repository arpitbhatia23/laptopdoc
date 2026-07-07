import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import authOptions from "../../auth/option";
import { uploadOnCloudinary } from "@/utils/cloudnairy";
export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }
    const uploadedImages = [];
    const formData = await req.formData();
    console.log(formData);
    // Accept both 'images' (client uses this) and fallback to 'image'
    let files = formData.getAll("images");
    if (!files || files.length === 0) files = formData.getAll("image");
    console.log(files);
    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, error: "No images provided" },
        { status: 400 },
      );
    }

    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];

    for (const file of files) {
      if (!validTypes.includes(file.type)) {
        return NextResponse.json(
          {
            success: false,
            error: "Invalid file type. Only JPG, JPEG, PNG, WEBP allowed.",
          },
          { status: 400 },
        );
      }

      const uploadedImage = await uploadOnCloudinary(file);

      if (uploadedImage) {
        uploadedImages.push({
          url: uploadedImage.secure_url,
          public_id: uploadedImage.public_id,
        });
      }
    }
    console.log(uploadedImages);

    return NextResponse.json({
      success: true,
      images: uploadedImages,
    });
  } catch (error) {
    console.error("Multiple upload error:", error);

    return NextResponse.json(
      { success: false, error: "Upload failed" },
      { status: 500 },
    );
  }
}
