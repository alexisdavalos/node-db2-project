const express = require('express');
const db = require('../dbConfig.js')
const router = express.Router();

//Get Routes
router.get("/", (req, res) => {
    db.select("*")
    .from("cars")
    .then(cars =>{
        res.status(200).json(cars)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({error: 'Failed To Get Cars'})
    })
  });
  
router.get("/:id", (req, res) => {

});

//Post Routes
router.post('/', (req, res) => {
    const userData = req.body;
    db('cars').insert(userData)
    .then(ids => {
      res.status(201).json({ id: ids[0] });
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to create new user' });
    });
  });

//Put Routes
router.put("/:id", (req, res) => {

});

//Delete Routes
router.delete("/:id", (req, res) => {
    const {id} = req.params;
    db('cars').where({id}).del()
    .then(count => {
        if(count) {
            res.json({removed: count});
        }else{
            res.status(404).json({message: 'could not find car with that id'})
        }
    }).catch(err =>{
        res.status(500).json({message: 'Failed to delete user'});
    })
});


module.exports = router;

