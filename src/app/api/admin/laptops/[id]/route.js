import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import resellLaptopSchema from "@/models/resellLaptop.schema";
import dbConnect from "@/utils/dbConnect";
import authOptions from "@/app/api/auth/option";
import { deleteOnCloudinary } from "@/utils/cloudnairy";
export async function PATCH(req, { params }) {
  const { id } = await params;
  try {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await req.json();
    const laptop = await resellLaptopSchema.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!laptop) {
      return NextResponse.json({ error: "Laptop not found" }, { status: 404 });
    }
    return NextResponse.json(laptop);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update laptop" },
      { status: 500 },
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();

    const laptop = await resellLaptopSchema.findById(id);

    if (!laptop) {
      return NextResponse.json({ error: "Laptop not found" }, { status: 404 });
    }

    // Extract valid Cloudinary public IDs
    const publicIds =
      laptop.images?.map((image) => image.public_id).filter(Boolean) || [];

    // Delete all Cloudinary images
    if (publicIds.length > 0) {
      const deleteResults = await Promise.allSettled(
        publicIds.map((publicId) => deleteOnCloudinary(publicId)),
      );

      console.log("Cloudinary deletion results:", deleteResults);
    }

    // Delete MongoDB document
    await laptop.deleteOne();

    return NextResponse.json({
      success: true,
      message: `${publicIds.length} images and laptop deleted successfully`,
    });
  } catch (error) {
    console.error("Delete laptop error:", error);

    return NextResponse.json(
      {
        error: "Failed to delete laptop",
      },
      { status: 500 },
    );
  }
}
