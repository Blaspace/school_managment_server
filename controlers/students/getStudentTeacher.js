/** @format */

import Teacher from "../../schema/teacherSchema.js";

const handleGetStudentTeacher = async (req, res) => {
  const { student } = req;
  try {
    const teacher = await Teacher.find({
      teacherClass: student.studentClass,
    });
	let i = teacher.filter(v=>v.teacherDesignation === 'General' || student.studentDesignaion)
console.log(student.studentDesignaion)
    res.send(i);
  } catch (err) {
    console.log(err);
  }
};

export default handleGetStudentTeacher;
