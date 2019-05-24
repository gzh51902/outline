const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();

app.use(express.static('./'));

let proxyMiddleware = proxy({ 
    target: 'http://www.jiuxian.com', 
    changeOrigin: true,
    pathRewrite: {
        '/jiuxian':'/'
    }
});

// 如果请求以/jiuxian开头，则进入该中间件
app.post('/jiuxian/*',proxyMiddleware,(req,res)=>{
    // /jiuxian/act/selectPricebypids.htm -> http://www.jiuxian.com/jiuxian/act/selectPricebypids.htm
    // -> http://www.jiuxian.com/act/selectPricebypids.htm
    res.send(req.body)
})

app.listen(1902,()=>{
    console.log('success');
})
