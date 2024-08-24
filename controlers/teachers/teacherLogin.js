import Teacher from '../../schema/teacherSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const handleTeacherLogin = async(req, res)=>{
    const {email, password} = req.body
    try{
        const foundTeacher =await Teacher.findOne({teacherEmail: email})
        if(!foundTeacher) return res.sendStatus(401)
            const verify =await bcrypt.compare(password, foundTeacher.password)
        if(verify){
            const accessToken = jwt.sign({studentId :foundTeacher._id}, process.env.JWT_SECRETE, {
                expiresIn:'15d'

            })
            await Teacher.findByIdAndUpdate({_id: foundTeacher._id},{accessToken})
            res.send({accessToken})
        }else{
        if(!foundTeacher) return res.sendStatus(401)

        }
        
    }catch (err){
        console.log(err);
    }
}

export default handleTeacherLogin