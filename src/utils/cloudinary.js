import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // ✅ Cloudinary response
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // ✅ remove local file after success
    fs.unlinkSync(localFilePath);

    // ✅ use Cloudinary response fields
    console.log("Cloudinary upload successful!");
    console.log("URL:", response.url);
    console.log("Secure URL:", response.secure_url);
    console.log("Public ID:", response.public_id);

    return response;
  } catch (error) {
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    console.error("❌ Cloudinary upload failed:", error);
    return null;
  }
};

export { uploadOnCloudinary };
