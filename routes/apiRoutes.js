const router = require('express').Router();
//this is so we can get express router for routes

router.route('/characters')
    .get((req, res,err) => {
        //get all characters here
    })

router.route('/character')
    .post((req, res,err) => {
        //make a new character here
        res.send("");
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

router.route('/character/mine')
    .get((req, res,err) => {
        //get all characters here
        res.json(seeds);
    })
    
module.exports = router;