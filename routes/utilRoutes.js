const router = require('express').Router();
//this is so we can get express router for routes
const db = require('../models'); //brings in our models

router.get('/seed', (req, res, err) => {
    const seeds = require('../charSeeds.json');

    //Promise.all waits for mapping to finish and get sent back 
    Promise.all(
        seeds.map(character => db.Character.create(character))
        //seeds.map makes an array of promises
    ).then(characters => res.json(characters));
    
    
})

module.exports = router;