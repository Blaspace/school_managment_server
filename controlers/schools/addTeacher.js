import Teacher from "../../schema/teacherSchema.js"
import bcrypt from "bcrypt" 

const handleAddTeacher =async(req,res)=>{
    const teacher = req.body
    try{
        const salt =await bcrypt.genSalt(10)
        const hashedPassword =await bcrypt.hash(teacher.password, salt)
        const newTeacher = await Teacher.create({...teacher, password: hashedPassword, schoolId: req.school._id})
        res.send(newTeacher)
    }catch(err){
        res.sendStatus(500)
        console.log(err)
    }
}

export default handleAddTeacher