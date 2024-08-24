/** @format */

import Student from "../../schema/studentSchema.js";
import bcrypt from "bcrypt";

const handleAddStudent = async (req, res) => {
  const student = req.body;
  const i = {
    ...student,
    studentId: Math.floor(Math.random() * 900000) + 100000,
  };
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(student.password, salt);
    const newStudent = await Student.create({
      ...i,
      password: hashedPassword,
      schoolId: req.school._id,
    });
    res.send(newStudent);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
};

export default handleAddStudent;
