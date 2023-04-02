const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./routes/user.routes")
// const {postRouter}=require("./routes/post.route")
const {authenticate}=require("./middleware/auth.middle")
const cors=require("cors")
require("dotenv").config()
const app=express()



app.use(express.json())


app.get("/",(req,res)=>{
    res.status(200).send("home page")
})

app.use("/users",userRouter)
app.use(authenticate)
// app.use("/posts",postRouter)


app.listen(process.env.port,async()=>{

    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error.message)
    }
    console.log("server running")
})