/** @format */

import { model, Model, Schema } from "mongoose";

const studentSchema = new Schema({
  password: String,
  studentName: String,
  studentClass: String,
  studentGender: String,
  studentPhoneNumber: String,
  studentEmail: String,
  studentId: Number,
  schoolId: String,
  studentDesignaion: String,
  accessToken: String,
  image: String,
});

const Student = model("student", studentSchema);

export default Student;
