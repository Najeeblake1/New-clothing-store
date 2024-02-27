const express = require ("express")
require ("dotenv").config()

const stripe = require ("stripe") (process.env.SECRET_KEY)

const app= express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post("/charge", async(req, res)=>{
try{
    const{amount, token} = req.body
    const charge= await stripe.charges.create({
        amount: amount, 
        currency: "cad",
        source: token,
        description: "example charge"
    })
    res.status(200).json({message:"payment successful",charge})

}catch(error){
    console.error(error)
    res.status(500).json({message:"payment failed"})
}
})
app.listen(4242, ()=>{console.log("hello")})
