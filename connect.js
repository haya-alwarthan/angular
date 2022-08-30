require('dotenv').config();
const {Client}= require("pg");
const {Pool}= require("pg");

const pool =new Pool(
    {
        database:process.env.DATABASE_NAME,
        host:process.env.DATABASE_HOST,
        user:process.env.DATABASE_USER,
        password:process.env.DATABASE_PASSWORD,
        port:54320,

    }
)
const client = new Client({
    "user":"user",
    "password":"admin",
    "host":"localhost",
    "port":54320,
    "database":"user"
})
start()
async function start(){
    await connect();
    const todos= await readTodos();
    console.table(todos)
}

async function connect(){
    try {
        await client.connect();

    }
    catch(e){
        console.error(`Failed to connect ${e}`)
    }
}

async function readTodos(){
    try {
        const results= await client.query("select * from todo");
        return results.rows

    }
    catch(e){
        return []
    }
}

 async function addTask(){
     
 }

