require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');


router.get('/google', passport.authenticate('google'), (req, res) => res.sendStatus(200));
router.get('/google/redirect', passport.authenticate('google', { session: true }),
    (req, res) =>{
   res.redirect(`${process.env.CLIENT_URL}/collection`);
  // res.send(req.user);

        }
);
module.exports = router;
