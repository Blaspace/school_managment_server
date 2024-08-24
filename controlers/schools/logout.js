import School from "../../schema/schoolSchema.js"

const handleLogout =async(req, res)=>{
    try{
   const school = await School.findByIdAndUpdate( req.school.schoolId, {accessToken: ''})
   res.sendStatus(200)
    }catch(err){
        console.log(err)
    }
}

export default handleLogout