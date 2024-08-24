import Billing from "../../schema/billingSchema.js";

const handleGetBilling =async (req, res)=>{
    const school = req.school
    try{
        const billing =await Billing.find({schoolId: school._id})
        res.send(billing)
    }catch (err){
        console.log(err);
    }
}

export default handleGetBilling 