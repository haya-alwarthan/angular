const express = require('express');
const router = express.Router();
const passport = require('passport');
const isAuth = require("../../isAuth");
const pool = require('../../db-con');


router.get('/account', isAuth, (req, res) => {
    const user={
        ...req.user,
        loggedIn:true
    };

    res.json(user)
});

router.get('/logout', isAuth, (req, res) => {
    req.session.destroy((()=>{
        res.redirect('http://localhost:4200/collection')
    }))
    // const user={
    //     loggedIn:false
    // };
    // res.json(user)
});


router.post('/collection/add', async(req, res) => {
    console.log("at index route", req.body)
    res.json({...req.body,sent:"ok"})

  try {
    await(pool.query('insert into collections (user_id,pokemon_id)  values ($1,$2)',
    [req.body.user.id,req.body.pokemon_id] ));
  }
  catch(e){
    console.log("insert into collection error",e)

  }
});

router.get('/collection/:userId', async(req, res) => {
    console.log("at index route, collection PARAMS>>>>>", req.params)
    

  try {
    const  colection_query = await(pool.query('select pokemon_id from collections where user_id=$1',
    [req.params.userId] ));
    console.table(colection_query.rows);
    res.json(colection_query.rows)
  }
  catch(e){
    console.log("disyplay collection error",e)

  }
});



module.exports = router;
