import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (file) => {
  try {
    if (!file) throw Error("localfile is required");
    const buffer = Buffer.from(await file.arrayBuffer()); // use Buffer.from, not Buffer()
    const base64String = buffer.toString("base64");
    const dataUri = `data:${file.type};base64,${base64String}`;
    const res = await cloudinary.uploader.upload(dataUri, {
      folder: "laptopDocs",
      transformation: {
        quality: "auto",
        fetch_format: "auto",
      },
    });
    return res;
  } catch (error) {
    console.log("error : ", error);
  }
};

export const deleteOnCloudinary = async (public_Id) => {
  try {
    if (!public_Id) {
      throw new Error("public id is required ");
    }
    const res = await cloudinary.uploader.destroy(public_Id);
    console.log(res);
    console.log("deleted on cloudinary: ");
    return res;
  } catch (error) {
    console.log("error: ", error);
  }
};

// const publicIds = [
//   "laptopDocs/f8xoezjqnyq0ia0arsph",
//   "laptopDocs/hdw5zvyjavxrteakbxrd",
//   "laptopDocs/hjnthkzteahwnvlhnyzc",
//   "laptopDocs/l6y0uv3ho3wrs3bnmxsm",
//   "laptopDocs/n51zaojwrgbcvsf7gfpr",
//   "laptopDocs/qayjaja9snntju3ogjjg",
//   "laptopDocs/qpzloqljikxhr1bctysx",
//   "laptopDocs/ufsr2kot5jipeb7xzsds",
//   "laptopDocs/llif6qqwcjvmpa5l99tb",
//   "laptopDocs/rcrwwye454tsvphwcbbx",
//   "laptopDocs/d5zydosn3yfclqw1ainm",
//   "laptopDocs/el0xotupbvcuuyhs0ljx",
//   "laptopDocs/lyrrenithhktzfobjzm9",
//   "laptopDocs/orip5qo1whzzf0b4estt",
//   "laptopDocs/rh8susj5rlfiy6u4zgb5",
//   "laptopDocs/y04ayyujrzabgcwwy93m",
// ].map((id) => {
//   deleteOnCloudinary(id);
// });
// export const getAllCloudinaryImages = async () => {
//   try {
//     const result = await cloudinary.api.resources({
//       resource_type: "image",
//       prefix: "laptopDocs",
//       type: "upload",
//       max_results: 100,
//     });
//     console.log(result.resources);
//     return result.resources;
//   } catch (error) {
//     console.error("Failed to fetch Cloudinary images:", error);
//     throw error;
//   }
// };

// getAllCloudinaryImages();
