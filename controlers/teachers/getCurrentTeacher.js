

const handleGetCurrentTeacher = (req, res) =>{
    const {teacher} = req
    res.send(teacher)
}

export default handleGetCurrentTeacher