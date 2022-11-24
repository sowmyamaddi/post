const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=2005

app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())

app.use(cors())


 app.get("/",(req,res)=>{
 	res.send("waiting")
 })
 app.post("/newData",(req,res)=>{
 	const {name,password}=req.body
 	console.log(name,password)
 	res.send("added")
 })

app.listen(port,()=>console.log("server is taking time"))