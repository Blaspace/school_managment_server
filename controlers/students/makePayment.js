import stripePackage from "stripe";
import Payment from "../../schema/payment.js";

const stripe = new stripePackage(process.env.STRIPE_SECRET);

const handleMakePayment = async (req, res) => {
    const {title, amount} = req.body

   const i =await Payment.create({
    title,
    amount,
    studentId: req.student._id
   })
 
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"], // Payment method types accepted (e.g., card)
      line_items: [
        {
          price_data: {
            currency: 'USD',
            product_data: {
              name: title, // Name of your product or service
            },
            unit_amount: amount * 100, // Amount in cents
          },
          quantity: 1, // Quantity of the product
        },
      ],
      mode: "payment",
      success_url: `${process.env.DOMAIN}/student/dashboard/billing`,
      cancel_url: `${process.env.DOMAIN}/student/dashboard/billing`,
    });
    res.send({ success: session.url });
  } catch (error) {
    console.log(err);
    
  }
};

export default handleMakePayment
