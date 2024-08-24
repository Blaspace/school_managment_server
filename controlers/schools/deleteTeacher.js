import Teacher from "../../schema/teacherSchema.js"

const handleDeleteTeacher = async(req,res)=>{
    try{
        const teacher = await Teacher.findByIdAndDelete(req.body.id)
        res.send(teacher)
    }catch(err){
        res.sendStatus(500)
        console.log(err)
    }
}

export default handleDeleteTeacher