const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add this before server.use(router)
server.use(jsonServer.rewriter({
  '/common/address/:geoHash': '/address/1',
  '/common/foodCategory': '/foodCategory/1',
  '/common/nearbyMerchant?longitude=:l&latitude=:l': '/shops/1',
  '/account/signUp/1': '/accountSignUp',
  '/account/signUp/2': '/accountSignUp',
  '/account/sendCode?phone=:p': '/accountSendCode/1',
  '/account/logout': '/accountLogout/1',
  '/account/userInfo/': '/accountUserInfo/1',
  '/merchant/info': '/merchantInfo/1',
  '/merchant/food': '/merchantFood/1',
  '/merchant/rating': '/merchantRating/1',
  '/search/merchant?keyword=:k&geohash=:g': '/shops/1'
}));

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.jsonp(req.query);
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    switch (req.originalUrl) {
      case '/account/signUp/1':
      case '/account/signUp/2':
        req.body.code = 0;
        break;
    }
  }
  // Continue to JSON Server router
  next();
});

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
