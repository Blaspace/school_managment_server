import Notification from "../../schema/notification.js";

const handleSchoolNotification = async(req, res)=>{
    const {message, toCategory} = req.body
    const {school} = req

    try{
        const newMessage =await Notification.create({
            message,
            toCategory,
            fromId: school._id,
            toId: req.params.id,
            fromCategory: 'school',
            date: Date().slice(0,24)
        })
        res.send({notification: newMessage})
    }catch (err){
        console.log(err);
    }
}

export default handleSchoolNotification