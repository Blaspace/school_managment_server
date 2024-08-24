import { model, Model, Schema } from "mongoose";


const teacherSchema = new Schema({
    password:String,
    designation:String,
    teacherName:String,
    teacherEmail:String,
    teacherClass:String,
    teacherGender:String,
    teacherSubject:String,
    teacherPhoneNumber:String,
    schoolId:String,
    accessToken:String
})

const Teacher = model('teacher', teacherSchema)

export default Teacher