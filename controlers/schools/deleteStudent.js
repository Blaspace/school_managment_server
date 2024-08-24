import Student from "../../schema/studentSchema.js"

const handleDeleteStdent = async(req, res)=>{
    try{
        const deletedUser =await Student.findByIdAndDelete(req.params.id)
        res.send(deletedUser)
    }catch(err){
        res.sendStatus(500)
        console.log(err)
    }
}

export default handleDeleteStdent;