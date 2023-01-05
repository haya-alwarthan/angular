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
module.exports=pool;