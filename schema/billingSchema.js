import {Schema, model} from 'mongoose'

const billingSchema =new Schema({
    amount: Number,
    title:String,
    schoolId: String,
})

const Billing = model('Billing', billingSchema)

export default Billing