const router = require('express').Router();
const jwt = require('jsonwebtoken');

function decodeJWT(req,res,next){
  try{
    const token = req.header('Authorization').replace('Bearer ','');
  
    let decode = jwt.verify(token,"hello");
    req.decode = decode;
    next()
  } catch(err){
    res.send({
      err
    })
  }
}

router.post('/login',(req,res)=>{

  let token = jwt.sign({email:req.email}, "hello" , {
    expiresIn: 1000 * 20
  });

  res.json({
    token
  })
})

router.post('/decode', decodeJWT ,(req,res)=>{
  res.json({
    msg :'success',
    decode : req.decode
  })
})

router.post('/load', decodeJWT ,(req,res)=>{
  console.log(req.decode);

  res.json({
    msg :'success',
    decode : req.decode
  })

})


module.exports = router