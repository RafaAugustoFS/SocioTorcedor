const { Router } = require('express');
const userRouter = require('./userRouter');
const matchRouter = require('./matchRouter');
const ticketRouter = require('./ticketRouter')
const dependentRouter = require('./dependentRouter')

const router = Router();

router.use('/user', userRouter);
router.use('/match', matchRouter);
router.use('/ticket', ticketRouter)
router.use('/dependent', dependentRouter)

module.exports = router;