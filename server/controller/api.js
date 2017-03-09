const express = require ('express');
const Worker = require('../models/test-model');

const router = express.Router();

//get request => sending back some data from database
router.get('/workers', (req, res, next) => {
  Worker.geoNear(
    {
      type: 'Point',
      coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    {
      maxDistance: 1000,
      spherical: true
    }
  )
  .then(workers => res.send(workers))
  .catch(next);
});
