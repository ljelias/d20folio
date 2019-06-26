const router = require('express').Router();
const db = require('../models');
const seeds = require('../charSeeds.json');

router.route('/characters')
.get( (req,res,err) => {
    //get all characters here
    //res.json(seeds);
    db.Character.find({})
    .sort({_id: -1}) //this puts newest on the top of the display
    .then(characters => {console.log("Got characters: ", characters); return characters;})
    .then(characters => res.json(characters))
    .catch(error => res.json(500, error))
})

router.route('/character')
.post( (req,res,err) => {
    //make new characters here
   // res.json("");
   const newChar = req.body;

   db.Character.create(newChar)
   .then(character => res.json(character))
   .catch(error => res.json(500, error))
})

router.route('/character/:id')
.get( (req,res,err) => {
    //get a single character here
    res.json(seeds[0]);
})
.put( (req,res,err) => {
    //update a character here
    res.json("");
})
.delete( (req,res,err) => {
    //delete a character here
    res.json("");
})

router.route('/characters/mine')
.get( (req,res,err) => {
    //get all my characters here
    res.json(seeds);
})

module.exports = router;