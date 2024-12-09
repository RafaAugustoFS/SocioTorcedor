const { Router } = require('express');
const DependentController = require('../controllers/dependentController');

const router = Router();

router.post('/', (req, res) =>{
    DependentController.create(req, res)
})

router.put('/:id', (req, res) =>{
    DependentController.update(req, res)
})

router.get('/', (req, res) =>{
    DependentController.getAll(req, res)
})

router.get('/:id', (req, res) =>{
    DependentController.getOne(req, res)
})

router.delete('/:id', (req, res) =>{
    DependentController.delete(req, res)
})

module.exports = router;