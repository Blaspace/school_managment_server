import Teacher from "../../schema/teacherSchema.js"

const handleTeacherLogout = async(req,res)=>{
    const {teacher} = req
    try{
        await Teacher.findOneAndUpdate({_id: teacher._id}, {accessToken: null})
        res.sendStatus(200)
    }catch (err){
        console.log(err);
    }
}

export default handleTeacherLogout