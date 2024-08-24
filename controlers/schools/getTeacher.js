import Teacher from "../../schema/teacherSchema.js"

const handleGetTeacher = async(req, res)=>{
    try{
        const teacher =await Teacher.find({schoolId: req.school._id})
        res.send(teacher)
    }catch(err){
        res.sendStatus(500)
    }
}

export default handleGetTeacher