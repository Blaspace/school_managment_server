import Billing from "../../schema/billingSchema.js"

const handleAddBilling = async(req, res)=>{
    try{
    const school = req.school
    const newBilling =await Billing.create({
        title: req.body.title,
        amount: req.body.amount,
        schoolId: school._id,
    })
    res.send(newBilling)
}catch (err){
    console.log(err)
}
}

export default handleAddBilling