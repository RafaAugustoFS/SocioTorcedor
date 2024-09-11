const { Router } = require('express');
const MatchController = require('../controllers/matchController');

const router = Router();

router.post('/', (req, res) =>{
    MatchController.create(req, res)
})

router.put('/:id', (req, res) =>{
    MatchController.update(req, res)
})

router.get('/', (req, res) =>{
    MatchController.getAll(req, res)
})

router.get('/:id', (req, res) =>{
    MatchController.getOne(req, res)
})

router.delete('/:id', (req, res) =>{
    MatchController.delete(req, res)
})

module.exports = router;