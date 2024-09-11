const { Router } = require('express');
const userRouter = require('./userRouter');
const matchRouter = require('./matchRouter');

const router = Router();

router.use('/user', userRouter);
router.use('/match', matchRouter);

module.exports = router;