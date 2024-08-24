/** @format */

import Result from "../../schema/resultSchema.js";

const handleUploadResult = async (req, res) => {
  const { teacher } = req;
  const { firstCA, secondCA, thirdCA, exam, studentId } = req.body;
  try{
  const resultExist = await Result.findOne({studentId});
  if (resultExist) {
    const i = await Result.findOneAndUpdate({studentId}, { firstCA, secondCA, thirdCA, exam, studentId })
    res.send(i)
  } else {
    const x = await Result.create({
        firstCA, secondCA, thirdCA, exam, studentId, teacherId: teacher._id
    })
    res.send(x)
  }
}catch (err){
    console.log(err);
}
};


export default handleUploadResult