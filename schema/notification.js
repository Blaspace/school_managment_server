import {Schema, model} from 'mongoose'

const notificationSchema = new Schema({
    message: String,
    fromId: String,
    toId: String,
    toCategory: String,
    fromCategory: String,
    date:String
})

const Notification = model('Notification', notificationSchema)

export default Notification