/** @format */

import Result from "../../schema/resultSchema.js";

const handleGetstudentResult = (req, res) => {
  const { student } = res;
  try {
    const results = Result.find({ studentId: student._id });
    res.send(results);
  } catch (err) {
    console.log(err);
  }
};

export default handleGetstudentResult;
