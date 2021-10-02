var express = require('express');
var router = express.Router();
var services = require('../services/Services');
var jwt = require('jsonwebtoken');

const jwtSecret = "secretkey#*"


/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


const authMiddleWare=(req,res,next)=>{
  try{
    var token=req.headers.authorization.split(" ")[1];
    let decoded=jwt.verify(token,jwtSecret);
    req.decoded=decoded;  //object=>{username:username,_id:_id}
    next()
  }
  catch{
    res.status(401).send({ message: "invalid details" })
  }
}



router.post('/signup', (req, res) => {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  var gender = req.body.gender;
  services.registererUser(username, email, password, gender).then((result) => {
    res.send(result)
  })
});

router.post('/signin', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  services.authUser(username, password).then((result) => {
    if (result) {
      const token = jwt.sign({
        username: result.username,
        _id: result._id
      }, jwtSecret)

      res.send({ message: "logged in sucessfully", token: token })
    }
    else {
      res.status(422).send({ message: "invalid credentials" });
    }
  })
});


router.get("/purchaised", authMiddleWare,async (req,res)=>{
  // res.send(req.decoded._id)
  await services.getPurchaised(req.decoded._id)
  .then((result)=>{
     res.send(result)
  })
});

router.get("/rented",authMiddleWare,async (req,res)=>{
  // res.send(req.decoded._id)
  await services.getRented(req.decoded._id)
  .then((result)=>{
    res.send(result)
  })
});

router.post("/purchaised",authMiddleWare,(req,res)=>{
  // res.send(req.decoded._id)
  services.purchaised(req.body.data,req.decoded._id)
  .then((result)=>{
    res.send(result)
  })
});

router.post("/rented",authMiddleWare,(req,res)=>{
  // res.send(req.decoded._id)
  services.rented(req.body.data,req.decoded._id)
  .then((result)=>{
    res.send(result)
  })
});

router.delete("/deleteitem",authMiddleWare,(req,res)=>{
  services.deleteitem(req.body.itemId,req.decoded._id)
  .then((result)=>{
    res.send(result)
  })
})

module.exports = router;
