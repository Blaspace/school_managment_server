import School from "../../schema/schoolSchema.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import env from 'dotenv'
env.config()

const handleAddSchool = async(req, res)=>{
    const schoolData = req.body
    const school = await School.findOne({schoolName: schoolData.schoolName})
    if(school) {
       return res.status(409).send({msg:'School already exist'})
    }
    try{
        const salt =await bcrypt.genSalt(10)
        const hashedPassword =await bcrypt.hash(schoolData.password, salt)
        const newSchool =await School.create({...schoolData, password: hashedPassword})
        const accessToken = jwt.sign({id: newSchool._id}, process.env.JWT_SECRETE, {
            expiresIn: '15d'
        })
        const updatedSchool =await School.findByIdAndUpdate(newSchool._id, {accessToken})
        res.send({accessToken})
    }catch(err){
        res.sendStatus(500)
        console.log(err)
    }
}

export default handleAddSchool