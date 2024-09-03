/** @format */

import { Schema, model } from "mongoose";

const materialSchema = new Schema({
  title: String,
  teacherId: String,
  subject: String,
  class: String,
  designation:String,
  teacherName:String,
  file: String,
  description:String,
});

const Material = model("Material", materialSchema);

export default Material;
