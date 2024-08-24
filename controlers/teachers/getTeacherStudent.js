/** @format */

import School from "../../schema/schoolSchema.js";
import Student from "../../schema/studentSchema.js";

const handleGetTeacherStudent = async (req, res) => {
  const { teacher } = req;
  try {
    const students = await Student.find({
      studentClass: teacher.teacherClass,
    });
	const i = students.filter(v=>{
	if(teacher.designation === 'General'){
return v
}else{
return v.studentDesignaion === teacher.designation
}
})
    res.send(i);
  } catch (err) {
    console.log(err);
  }
};

export default handleGetTeacherStudent;
