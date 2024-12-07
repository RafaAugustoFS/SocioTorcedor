const { Router } = require('express');
const userRouter = require('./userRouter');
const matchRouter = require('./matchRouter');
const ticketRouter = require('./ticketRouter')

const router = Router();

router.use('/user', userRouter);
router.use('/match', matchRouter);
router.use('/ticket', ticketRouter)

module.exports = router;