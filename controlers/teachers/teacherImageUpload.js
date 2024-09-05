/** @format */
import cloudinary from "cloudinary";
import Teacher from "../../schema/teacherSchema.js";
import fs from 'fs'

const handleUploadImage = async (req, res) => {
  const teacher = req.teacher;
  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path, {
      folder: "/teacherManagment/",
      use_filename: true,
    });
    const i = await Teacher.findByIdAndUpdate(teacher._id, { image: result.url });
    fs.unlinkSync(req.file.path)
    res.send({image: result.url});
  } catch (err) {
    console.log(err);
  }
};

export default handleUploadImage;
