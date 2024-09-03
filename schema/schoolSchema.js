import mongoose from 'mongoose'

const schoolSchema =new mongoose.Schema({
    adminName: String,
    schoolName: String,
    schoolEmail:  String,
    password:String,
    numberOfStaff: Number,
    schoolAddress: String,
    accessToken:String,
    logo: String,
})

 const School = mongoose.model('school', schoolSchema)
 export default School;