/** @format */

import Material from "../../schema/materiaSchema.js";
import cloudinary from "cloudinary";

const handleUploadMaterial = async (req, res) => {
  const { teacher } = req;
  try {
    /*const result = await cloudinary.v2.uploader.upload(req.file.path, {
          folder: "/teacherManagment/",
          use_filename: true,
        });*/
    const i = await Material.create({
      title: req.body.title,
      description: req.body.description,
      teacherId: teacher._id,
      subject: teacher.subject,
      class: teacher.teacherClass,
      file: req.file.path,
      designation: teacher.designation,
      teacherName: teacher.teacherName,
    });
    res.send(i);
  } catch (err) {
    console.log(err);
  }
};

export default handleUploadMaterial;
