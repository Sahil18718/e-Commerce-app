const express=require("express")
const {UserModel}=require("../models/user.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")


const userRouter=express.Router()




userRouter.post("/register",async(req,res)=>{
    const {name,email,pass,age,city,is_married}=req.body
    try {
        bcrypt.hash(pass,5,async(err,hash)=>{
            if(err){
                res.status(400).send({"error":error.message})   
            }else{
                const user=new UserModel({name,email,pass:hash,age,city,is_married})
                await user.save()
                res.status(200).send({"msg":"New user has been register"})
            }
        })
        
        
        
    } catch (error) {
        res.status(400).send({"error":error.message})
        
    }
    
})




userRouter.post("/login",async(req,res)=>{
    const {email,pass}=(req.body)
    try {
        
        const user=await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(pass,user[0].pass,(err,result)=>{
                if(result){
                    let token=jwt.sign({userID:user[0]._id},"masai")
                    res.status(200).send({"msg":"login successful","token":token})
                }else{
                    res.status(400).send({"msg":"Wrong data"})

                }
            })
            
        }else{  
            res.status(400).send({"msg":"Wrong data"})

        }
    } catch (error) {
        res.status(400).send({"error":error.message})
        
    }
    

})

module.exports={
    userRouter
}

