const router = require('express').Router();
const db = require('../models');
//this is so we can get express router for routes
const seeds = require('../charSeeds.json');

router.route('/characters')
    .get((req, res,err) => {
        //get all characters here
        // res.json(seeds);
        db.Character.find({})
            .sort({_id: -1}) //new stuff on top
            //way to console log characters when accessing from DB | whatever gets returned out of return will go straight into next .then function
            .then(characters => {console.log("Got Characters: ", characters); return characters;})
            //complete find, get response, and send back
            .then(characters => res.json(characters))
            .catch(error => res.json(500, error))
    })

router.route('/character')
    .post((req, res,err) => {
        //make a new character here
        //res.json("")
        //when sending information from page it will be in req.body
        const newChar = req.body;

        db.Character.create(newChar)
            .then(character => res.json(character))
            .catch(error => res.json(500, error))
    })

router.route('/characters/:id')
    .get((req, res,err) => {
        //get a single character
        res.json(seeds[0]);
    })
    .put((req, res,err) => {
        //update a character here
        res.json("");
    })
    .delete((req, res,err) => {
        //delete character here
        res.json("");
    })

router.route('/characters/mine')
    .get((req, res,err) => {
        //get all characters here
        res.json(seeds);
    })
    
module.exports = router;