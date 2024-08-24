import Student from '../../schema/studentSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const handleStudentLogin = async(req, res)=>{
    const {email, password} = req.body
    try{
        const foundStudent =await Student.findOne({studentEmail: email})
        if(!foundStudent) return res.sendStatus(401)
            const verify =await bcrypt.compare(password, foundStudent.password)
        if(verify){
            const accessToken = jwt.sign({studentId :foundStudent._id}, process.env.JWT_SECRETE, {
                expiresIn:'15d'

            })
            await Student.findByIdAndUpdate({_id: foundStudent._id},{accessToken})
            res.send({accessToken})
        }else{
        if(!foundStudent) return res.sendStatus(401)

        }
        
    }catch (err){
        console.log(err);
    }
}

export default handleStudentLogin