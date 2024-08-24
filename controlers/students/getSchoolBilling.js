import Billing from '../../schema/billingSchema.js'

const handleGetBilling =async (req, res)=>{
    const {student} = req
    try{
        const billing =await Billing.find({schoolId: student.schoolId})
        res.send(billing)
    }catch (err){
        console.log(err);
    }
}

export default handleGetBilling