const router = require('express').Router();
//this is so we can get express router for routes

//where we'll set up highest level of files
router.use('/util', require('./utilRoutes'));
router.use('/api', require('./apiRoutes'));

module.exports = router;