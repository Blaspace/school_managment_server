import fs from 'fs'
const handleDownload = (req, res)=>{
    const path = req.params.file
    try{
        fs.createReadStream(`images/${path}`).pipe(res)
    }catch (err){
        console.log(err);
    }
}

export default handleDownload