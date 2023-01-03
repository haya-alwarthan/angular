require('dotenv').config()
const { json } = require('express');
const express= require('express');
const cors = require('cors');
const session= require('express-session')
const passport=  require('passport')
// This is equivlent to X=y.X 
const {Client}= require("pg");

require('./strategies/google')
const client = new Client({
    "user":"user",
    "password":"admin",
    "host":"localhost",
    "port":54320,
    "database":"user"
})


const PORT= 3000
const app=express()
app.use(cors(
    {
        credentials:true,
        origin:process.env.CLIENT_URL
    }
));
app.use(express.json())
app.use(session(
    {
        secret:process.env.COOKIE_SECRET,
        cookie:{
            secure:process.env.NODE_ENV==='production'?'true':'auto',
            sameSite:process.env.NODE_ENV==='production'?'none':'lax'
        },
        resave:false,
        saveUninitialized:false
        }
))
app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/auth');
const indexRoute=  require('./routes/indexRoute');
app.use('/api/auth',authRoutes)
app.use('/api/',indexRoute)
app.use(express.static(__dirname + '/dist/pokedex'));
app.get('/*', function(req,res) {
res.sendFile(__dirname+
'/dist/pokedex/index.html');});
app.listen(PORT || 3000,()=>console.log(`Server is listening on port ${PORT}`))
 
app.use(logger)

function logger(req,res,next){
    console.log( ` logged [${Date.now()}] ${req.method} ${req.url}`);
    next();
}





// start()
// app.get('/',(req,res)=>{
//  res.sendFile(`${__dirname}/index-todo.html`)

// })
// app.get('/greet/:name',(req,res)=>{
//     res.json({ok:`Hello ${req.params.name}`})
// })
// app.get('/greeting/:name',(req,res)=>{
//     res.send(`Hello ${req.params.name} `)
// })
// // API call to the function that returns all data in todo table 
//  app.get('/getData',async (req,res)=>{
//     try{
//     todos= await readTodos();
//     res.setHeader("content-type","application/json")
//     res.send(JSON.stringify(todos))}
//     catch(e){
//         console.log
//     }
// })

// // API call to the function that inserts a row to todo table 
// app.post('/create_todo',async (req,res)=>{
//     let result={}
//     try{
//     const req_json=req.body;
//     result.success= await addTask(req_json.id,req_json.task);
//     }
//     catch(e){
//         result.success=false
//     }
//     finally{
//         res.setHeader("content-type","application/json")
//         res.send(JSON.stringify(result))

//     }
// })


// // API call to the function that deleted a row from the table 
// app.post('/create_todo',async (req,res)=>{
//     let result={}
//     try{
//     const req_json=req.body;
//     result.success= await addTask(req_json.id,req_json.task);
//     }
//     catch(e){
//         result.success=false
//     }
//     finally{
//         res.setHeader("content-type","application/json")
//         res.send(JSON.stringify(result))

//     }
// })


// async function start(){
//     await connect();
//     const todos= await readTodos();
//     console.table(todos)
// }

// async function connect(){
//     try {
//         await client.connect();

//     }
//     catch(e){
//         console.error(`Failed to connect ${e}`)
//     }
// }

// async function readTodos(){
//     try {
//         const results= await client.query("select * from todo");
//         console.log(JSON.stringify(results.rows))
//         return results.rows

//     }
//     catch(e){
//         return []
//     }
// }

//  async function addTask(id,task){
//     try {
//          await client.query("insert into todo values($1,$2)",[id,task]);
//         return true;

//     }
//     catch(e){
//         return false;
//     }
     
//  }
