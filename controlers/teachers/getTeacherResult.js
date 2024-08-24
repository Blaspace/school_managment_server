import Result from "../../schema/resultSchema.js";

const handleGetTeacherResult =async(req, res) =>{
    const {teacher} = req
    try{
        const results =await Result.find({teacherId: teacher._id})
        res.send(results)
    }catch (err){
        console.log(err);
    }
}

export default handleGetTeacherResult