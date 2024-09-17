import bcrypt from "bcrypt"
import School from "../../schema/schoolSchema.js"
import jwt from 'jsonwebtoken'

const handleLogin =async(req, res)=>{
    const {password, email} = req.body
    const school =await School.findOne({schoolEmail: email})
    if(!school) res.status(401).send({msg: "invalid password/school name"})
    try{
       const isPassword = bcrypt.compare(password, school.password)
       if(!isPassword){
        return res.status(401).send({msg: 'ivalid password/school name'})
       }
        const accessToken = jwt.sign({id: school._id}, process.env.JWT_SECRETE, {
            expiresIn: '15d'
        })
        const scl = await School.findByIdAndUpdate(school._id, {accessToken})
        res.send({accessToken}) 
    }catch(err){
        console.log(err);
    }
}

export default handleLogin