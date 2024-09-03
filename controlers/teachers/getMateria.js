import Material from "../../schema/materiaSchema.js"

const handleGetMaterial = async(req, res)=>{
    const {teacher} = req
    
    const material = await Material.find({teacherId: teacher._id})
    res.send(material)
}

export default handleGetMaterial