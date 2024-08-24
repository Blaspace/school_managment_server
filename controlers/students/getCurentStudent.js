const handleGetCurrentStudent =(req, res)=>{
    try{
        res.send(req.student)
    }catch (err){
        console.log(err)
    }
}

export default handleGetCurrentStudent