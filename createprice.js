const stripe = require('stripe')("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")
stripe.products.create({
  name: 'Starter Subscription',
  description: '$12/Month subscription',
}).then(product => {
  stripe.prices.create({
    unit_amount: 1200,
    currency: 'usd',
    recurring: {
      interval: 'month',
    },
    product: product.id,
  }).then(price => {
    console.log('Success! Here is your starter subscription product id: ' + product.id);
    console.log('Success! Here is your starter subscription price id: ' + price.id);
  });
});