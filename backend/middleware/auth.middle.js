const jwt=require("jsonwebtoken")

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        jwt.verify(token,"masai",(err,decoded)=>{
            if(decoded){
                req.body.user=decoded.userId
                next()
            }else{
                res.status(200).send({"msg":"Please login"})
            }
        })
    }else{
        res.status(200).send({"msg":"Please login"})
    }
}

module.exports={
    authenticate
}