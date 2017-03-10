const express = require ('express');
const Worker = require('../models/test-model');

const router = express.Router();

//get request => sending back
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

//post request => add to db
router.post('/workers', (req, res, next) => {
  Worker.create(req.body)
    .then(worker => res.send(worker))
    .catch(next);
});
//put request => update

router.put('/workers/:id', (req, res, next) => {
  Worker.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(worker => res.send(worker))
    .catch(next);
});

//delete request => nuff said

router.delete('/workers/:id', (req, res, next) => {
  Worker.findByIdAndRemove({_id: req.params.id})
    .then(worker => res.send(worker))
    .catch(next);
});

module.exports = router;
