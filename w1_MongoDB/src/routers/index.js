const express = require('express');

const Router = express.Router();

const goodsRouter = require('./goods');

Router.use(express.json(),express.urlencoded({extended:false}));

Router.use('/goods',goodsRouter);

// Router.use('/login',loginRouter)


module.exports = Router;