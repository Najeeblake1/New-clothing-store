const products = [
  {
      id: 1,
      title: "Black Hoodie",
      price: 100.00,
      stock: 20,
      picurl: "/pictures/blackhoodie.png",
      type:"sweater"
      
  },
  {
      id: 2,
      title: "Blue Hoodie",
      price: 100.00,
      stock: 20,
      picurl: "/pictures/bluehoodie.png",
      type:"sweater"
     
  },
  {
      id: 3,
      title: "Yellow Hoodie",
      price: 100.00,
      stock: 20,
      picurl: "/pictures/yellowhoodie.png",
      type:"sweater"
     
  },
  {
      id: 4,
      title: "Orange Hoodie",
      price: 100.00,
      stock: 20,
      picurl: "/pictures/orangehoodie.png",
      type:"sweater"
     
  },
  {
      id: 5,
      title: "Yellow Sweatpants",
      price: 60.00,
      stock: 20,
      picurl: "/pictures/yellowsweatpants.png",
      type:"pants"
     
  },
  {
      id: 6,
      title: "Orange Sweatpants",
      price: 60.00,
      stock: 20,
      picurl: "/pictures/orangesweatpants.png",
      type:"pants"
     
  },
  {
      id: 7,
      title: "Green Sweatpants",
      price: 60.00,
      stock: 20,
      picurl: "/pictures/greensweatpants.png",
      type:"pants"
     
  },
  {
      id: 8,
      title: "Blue Sweatpants",
      price: 60.00,
      stock: 20,
      picurl: "/pictures/bluesweatpants.png",
      type:"pants"
     
  },
  {
      id: 9,
      title: "Black Sweatpants",
      price: 60.00,
      stock: 20,
      picurl: "/pictures/blacksweatpants.png",
      type:"pants"
     
  },
  {
      id: 10,
      title: "Black Hat",
      price: 25.00,
      stock: 20,
      picurl: "/pictures/black hat.png",
      type:"hat"
     
  },
  {
      id: 11,
      title: "Orange Hat",
      price: 25.00,
      stock: 20,
      picurl: "/pictures/orangehat.png",
      type:"hat"
     
  },
];


const express = require('express');
// const bodyParser = require('body-parser');
// const stripe = require('stripe')(process.env.whsec_hSuAPtfJp9BVlYsa94kVLPQuG1QFWeMP, {
//   apiVersion: '2020-08-27',
//   appInfo: {
//     name: "stripe-samples/accept-a-payment/payment-element",
//     version: "0.0.2",
//     url: "https://github.com/stripe-samples"
//   }
// });

// const endpointSecret = 'whsec_hSuAPtfJp9BVlYsa94kVLPQuG1QFWeMP';
const app = express();
const port = 4242;
// const products= require ("./public/JS/data.js")
// Set the default view engine to EJS and specify the file extension
app.set("view engine", "ejs");
app.set("view options", { extension: "ejs" }); // Optional: Specify the file extension
app.use(express.static(__dirname + "/public"))
// Parse raw JSON bodies
// app.use(bodyParser.raw({type: 'application/json'}));

// Handle webhook events
// app.post('/webhook', (request, response) => {
//   const sig = request.headers['stripe-signature'];
//   let event;
//   try {
//     event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
//   } catch (err) {
//     response.status(400).send(`Webhook Error: ${err.message}`);
//     return;
//   }

  // Handle specific webhook events
  // switch (event.type) {
  //   case 'payment_intent.succeeded':
  //     console.log('PaymentIntent was successful!');
  //     break;
  //   case 'payment_method.attached':
  //     console.log('PaymentMethod was attached to a Customer!');
  //     break;
  //   // Handle other event types
  //   default:
  //     console.log(`Unhandled event type ${event.type}`);
  // }

  // Return a response to acknowledge receipt of the event
//   response.send();
// });

// Serve index page
app.get("/", function(req, res){
  res.render("index",{products:products});
});

app.get('data/id',(req,res)=>{
  const id = req.params.id;
  const prod= {};
  res.send(id);
  const product =
  products.find((item)=>item.id==id)
  
  res.json(product)
})

// ! maybe redundant code
app.get("/sendimage/:src",function(req, res){
  res.sendFile(__dirname + `/pictures/${req.params.src}`)
})

app.get('/products', (req, res) => {
  res.render('products', { products }); // Pass the products array to the template
});

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));

