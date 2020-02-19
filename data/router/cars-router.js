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
router.post("/", (req, res) => {
    db("cars")
    .insert(req.body, "id")
    .then(ids => {
        db("cars")
      .where(ids[0])
      .first()
      .then(inserted => {
          res.status(201).json(inserted);
      });
    }).catch(error => {
        console.log(error);
    
        res.status(500).json({ error: "failed to add the car" });
        })
});

//Put Routes
router.put("/:id", (req, res) => {

});

//Delete Routes
router.delete("/:id", (req, res) => {

});


module.exports = router;

