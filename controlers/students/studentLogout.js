import Student from "../../schema/studentSchema.js"

const handleStudentLogout = async(req,res)=>{
    const {student} = req
    try{
        await Student.findOneAndUpdate({_id: student._id}, {accessToken: null})
        res.sendStatus(200)
    }catch (err){
        console.log(err);
    }
}

export default handleStudentLogout