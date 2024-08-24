/** @format */

import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  firstCA: Number,
  secondCA: Number,
  thirdCA: Number,
  exam: Number,
  studentId: String,
  teacherId: String,
});

const Result = mongoose.model("Result", resultSchema);
export default Result;
