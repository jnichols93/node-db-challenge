const express = require('express');
const helpers = require('../data/helpers');
const router = express.Router();

router.post('/', (req, res) => {
    const newResource = req.body;
    if (!newResource.name) {
        res.status(400).json({ error: "YOU DIDNT SPECIFY THE RESCOURCES YOU WANTED MY GUY" })
    } else {
        helpers.addResource(newResource)
        .then(resp => {
            console.log(resp);
            res.status(201).json(resp)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "THE GOODS CANT GET GOT" })
        })
    }
})

router.get('/', (req, res) => {
    helpers.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "GETTING THE GOODS" })
    })
})

module.exports = router; 