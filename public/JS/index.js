const express = require ("express")
require ("dotenv").config()

const stripe = require ("stripe") (process.env.SECRET_KEY)

const app= express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname + "/public"))
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

// sidenav
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }