require('dotenv').config();
const passport =require( "passport");
const { Strategy : GoogleStrategy} =require( "passport-google-oauth20");
const pool= require('../../db-con')

//Used this so I dont get `object failed to get serialized` error, dont get it though
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });


passport.use(new GoogleStrategy(
    {
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:process.env.GOOGLE_REDIRECT_URL,
        scope:['email','profile']
    },
   async (accessToken, refreshToken, profile,done) => {
console.log(`access token: ${accessToken}, refresh token ${refreshToken} `)
const account= profile._json;
console.log(account);
try{
    console.log("pool: ",pool)
const query= await(pool.query(`select * from users where google_id=$1`,[account.sub]))
if(query.rows.length===0){ //no user with the same google_ID
    //create new user
    console.table(query)
    await(pool.query('insert into users (username, img,google_id)  values ($1,$2,$3)',
    [account.name,account.picture, account.sub] ))
const id= await (pool.query('select id from users where google_id=$1',[account.sub]))
user = {
    id:id.rows[0].id,
    username:account.name,
    img: account.picture

}
}
else {
    //there is user with same google_ID, get their ID and info from the query itself

    user = {
        id: query.rows[0].id,
        username:query.rows[0].username,
        img: query.rows[0].img
    
    }


}
done(null,user)
}
catch(e){
    done(e)

}

   }
)
    )