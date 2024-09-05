/** @format */
import cloudinary from "cloudinary";
import Student from "../../schema/studentSchema.js";
import fs from 'fs'

const handleUploadImage = async (req, res) => {
  const student = req.student;
  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path, {
      folder: "/studentManagment/",
      use_filename: true,
    });
    const i = await Student.findByIdAndUpdate(student._id, { image: result.url });
    fs.unlinkSync(req.file.path)
    res.send(result.url);
  } catch (err) {
    console.log(err);
  }
};

export default handleUploadImage;
