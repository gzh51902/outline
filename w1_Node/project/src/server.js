const express = require('express');
const app = express();

const {PORT} = require('./config.json');

const allRouters = require('./api/routers');

// 静态资源服务
app.use(express.static('./'))

app.use(function(req, res, next) {
    let allow = ['baidu.com','qq.com','laoxie.com'];
    let idx = allow.indexOf(req.headers['Host'])
    if(idx>=0){

        res.header("Access-Control-Allow-Origin", allow[idx]);
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    }

    // 跨域请求CORS中的预请求
    // 复杂跨域请求
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
});


// 利用中间件载入路由
app.use('/api',allRouters);


app.listen(PORT,()=>{
    console.log('server is running on http://localhost:%d',PORT);
})