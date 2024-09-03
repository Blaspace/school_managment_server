/** @format */
import cloudinary from "cloudinary";
import School from "../../schema/schoolSchema.js";
import fs from 'fs'

const handleUploadImage = async (req, res) => {
  const school = req.school;
  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path, {
      folder: "/schoolManagment/",
      use_filename: true,
    });
    const i = await School.findByIdAndUpdate(school._id, { logo: result.url });
    fs.unlinkSync(req.file.path)
    res.send(result.url);
  } catch (err) {
    console.log(err);
  }
};

export default handleUploadImage;
