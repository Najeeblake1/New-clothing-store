const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.whsec_hSuAPtfJp9BVlYsa94kVLPQuG1QFWeMP, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: "stripe-samples/accept-a-payment/payment-element",
    version: "0.0.2",
    url: "https://github.com/stripe-samples"
  }
});

const endpointSecret = 'whsec_hSuAPtfJp9BVlYsa94kVLPQuG1QFWeMP';
const app = express();
const port = 4242;

// Set the default view engine to EJS and specify the file extension
app.set("view engine", "ejs");
app.set("view options", { extension: "ejs" }); // Optional: Specify the file extension
app.use(express.static(__dirname + "/public"))
// Parse raw JSON bodies
app.use(bodyParser.raw({type: 'application/json'}));

// Handle webhook events
app.post('/webhook', (request, response) => {
  const sig = request.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle specific webhook events
  switch (event.type) {
    case 'payment_intent.succeeded':
      console.log('PaymentIntent was successful!');
      break;
    case 'payment_method.attached':
      console.log('PaymentMethod was attached to a Customer!');
      break;
    // Handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  response.send();
});

// Serve index page
app.get("/", function(req, res){
  res.render("index");
});
app.get("/sendimage/:src",function(req, res){
  res.sendFile(__dirname + `/pictures/${req.params.src}`)
})

// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));