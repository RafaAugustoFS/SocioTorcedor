const Router = require('express');
const TicketController = require('../controllers/ticketController');

const router = Router();

router.post('/', (req, res) =>{
    TicketController.buy(req, res)
})

router.get('/', (req, res) =>{
    TicketController.getAll(req, res)
})

router.get('/:id', (req, res) =>{
    TicketController.getOne(req, res)
})

router.delete('/:id', (req, res) =>{
    TicketController.delete(req, res)
})

module.exports = router;