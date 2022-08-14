require('dotenv').config()
const express= require('express')

const PORT= 3000
const app=express()
function logger(req,res,next){
    console.log( ` logged [${Date.now()}] ${req.method} ${req.url}`);
    next();
}
app.use(logger)
app.get('/',(req,res)=>{
    res.json({ok:true})
    console.log(process.env.hh);

})
app.get('/greet/:name',(req,res)=>{
    res.json({ok:`Hello ${req.params.name}`})
})
app.get('/greeting/:name',(req,res)=>{
    res.send(`Hello ${req.params.name} `)
})
app.get('/getData',(req,res)=>{
    res.json({
        "statusCode":200,
        "statusMessege":"SUCCESS"
    
    })
})
app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`))