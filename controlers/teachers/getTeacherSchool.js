import School from "../../schema/schoolSchema.js";

const handleGetTeacherSchool =async(req, res)=>{
    const {teacher} = req
    try{
        const school =await School.findById(teacher.schoolId)
        res.send(school)
    }catch (err){
        console.log(err);
    }
}

export default handleGetTeacherSchool