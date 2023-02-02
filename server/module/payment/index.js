exports.model = {
  Earning: require('./models/earning'),
  Transaction: require('./models/transaction')
};

exports.services = {
  Earning: require('./services/Earning'),
  Paydunya: require('./services/Paydunya'),
  Stripe: require('./services/Stripe'),
  PayPal:require('./services/PayPal'),
  Payment: require('./services/Payment')
};

exports.router = router => {
  require('./routes/transaction.route')(router);
  require('./routes/paydunya.route')(router);
  require('./routes/stripe.route')(router);
  require('./routes/paypal.route')(router);
};
