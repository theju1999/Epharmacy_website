var express = require("express")
var router = express.Router()
var Cart = require("../models/cart")
var User = require("../models/user")

var Product = require("../models/product")
var Productm = require('../models/productsmore');
var Order = require("../models/order")
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const productsmore = require("../models/productsmore")

/* GET home page. */
router.get("/", function(req, res, next) {
  var successMsg = req.flash("success")[0]
  Product.find(function(err, docs) {
    var productChunks = []
    var chunkSize = 3
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize))
    }
    


    
    res.render("shop/index", {
      title: "Shopping Cart",
      products: productChunks,
      successMsg: successMsg,
      noMessages: !successMsg
    })
  })
})
router.get("/search", function(req, res, next) {
  var successMsg = req.flash("success")[0]
  Product.find(function(err, docs) {
    var productChunks = []
    var chunkSize = 3
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize))
    }
    


    
    res.render("shop/search", {
      title: "Shopping Cart",
      productmore: productChunks,
      successMsg: successMsg,
      noMessages: !successMsg
    })
  })
})

 router.get('/aboutus', function(req, res, next) {
   res.render('aboutus');
});
router.get('/image', function(req, res, next) {
  res.render('image');
 });
//  router.get('/product1', function(req, res, next) {
//   res.render('shop/product1');
//  });


// router.get('/search', function(req, res, next) {
//   res.render('search');
// });




router.get("/shopping-cart", function(req, res, next) {
  if (!req.session.cart) {
    return res.render("shop/shopping-cart", {
      products: null
    })
  }
  var cart = new Cart(req.session.cart)
  res.render("shop/shopping-cart", {
    products: cart.generateArray(),
    totalPrice: cart.totalPrice
  })
})






router.get("/checkout", isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect("/shopping-cart")
  }
  var cart = new Cart(req.session.cart)
  var errMsg = req.flash("error")[0]
  res.render("shop/checkout", {
    total: cart.totalPrice,
    errMsg: errMsg,
    noError: !errMsg
  })
})

router.post("/checkout", isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.redirect("/shopping-cart")
  }
  var cart = new Cart(req.session.cart)

  var stripe = require("stripe")("sk_test_bgBdBuFAydIEVdepmjpaJKUy")

  stripe.charges.create(
    {
      amount: cart.totalPrice * 100,
      currency: "usd",
      source: req.body.stripeToken, // obtained with Stripe.js
      description: "Test Charge"
    },
    function(err, charge) {
      if (err) {
        req.flash("error", "We were unable to finalize your purchase!")
        return res.redirect("/checkout")
      }
      var order = new Order({
        user: req.user,
        cart: cart,
        address: req.body.address,
        name: req.body.name,
        paymentId: charge.id
      })
      order.save(function(err, result) {
        req.flash("success", "Purchase successful!")
        req.session.cart = null
        res.redirect("/")
      })
    }
  )
})


router.get("/add-to-cart/:id", function(req, res, next) {
  var productId = req.params.id
  var cart = new Cart(req.session.cart ? req.session.cart : {})

  Product.findById(productId, function(err, product) {
    if (err) {
      return res.redirect("/")
    }
    cart.add(product, product.id)
    req.session.cart = cart
    res.redirect("/")
  })
})





router.get("/reduce/:id", function(req, res, next) {
  var productId = req.params.id
  var cart = new Cart(req.session.cart ? req.session.cart : {})

  cart.reduceByOne(productId)
  req.session.cart = cart
  res.redirect("/shopping-cart")
})

router.get("/remove/:id", function(req, res, next) {
  var productId = req.params.id
  var cart = new Cart(req.session.cart ? req.session.cart : {})

  cart.removeItem(productId)
  req.session.cart = cart
  res.redirect("/shopping-cart")
})

router.get("/", homeController.getHome);

router.post("/upload", uploadController.uploadFiles);
router.get("/files", uploadController.getListFiles);
router.get("/files/:name", uploadController.download);




module.exports = router

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  req.session.oldUrl = req.url
  res.redirect("/user/signin")
}



//





// let routes = app => {
//   router.get("/", homeController.getHome);

//   router.post("/upload", uploadController.uploadFiles);
//   router.get("/files", uploadController.getListFiles);
//   router.get("/files/:name", uploadController.download);

//   return app.use("/", router);
// };

// module.exports = routes;
// //