import School from "../../schema/schoolSchema.js"


const handleGetStudentSchool = async(req, res)=>{
    const {student} = req
    try{
    const school =await School.findById(student.schoolId)
    res.send(school)
    }catch (err){
        console.log(err);
    }
}

export default handleGetStudentSchool