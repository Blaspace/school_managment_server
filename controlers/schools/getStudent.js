import Student from "../../schema/studentSchema.js"

const handleGetStudent =async (req, res)=>{
    try{
    const student = await Student.find({schoolId: req.school._id})
    res.send(student)
    }catch(err){
        res.sendStatus(500)
        console.log({"msg":err})
    }
}

export default handleGetStudent