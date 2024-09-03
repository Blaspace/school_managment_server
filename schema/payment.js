import {Schema, model} from 'mongoose'

const paymentSchema = new Schema({
   title:String,
   amount: String,
   studentId: String
})

const Payment = model('Payment', paymentSchema)

export default Payment