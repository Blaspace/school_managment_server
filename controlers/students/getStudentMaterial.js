/** @format */

import Material from "../../schema/materiaSchema.js";
import Teacher from "../../schema/teacherSchema.js";

const handleGetStudentMaterial = async (req, res) => {
  const { student } = req;
  try {
    const materials = await Material.find({
      class: student.studentClass,
    });
    console.log(materials);

    const i = materials.filter(
      (v) =>
        v.designation === student.studentDesignaion ||
        v.designation === "General"
    );
    console.log(i);
    res.send(i);
  } catch (err) {
    console.log(err);
  }
};

export default handleGetStudentMaterial;
