const express = require('express');
const http = require('http');
const ws = require('ws');
const app = express();
const {PORT} = require('./config.json');

// 利用http模块结合express & socket
const server = http.Server(app);
const socket = new ws.Server({
	server
});

app.use(express.static('./'));

server.listen(PORT,()=>{
    console.log('success, http://localhost:'+PORT)
});

// 当客户端连接socket服务器时，触发connection时间
socket.on('connection', client=>{console.log(6666)
    // client：连接服务器的客户端
    client.on('message',(msg)=>{
        // msg前端发送给服务端的信息
        // 广播消息：分别发送给所有在线的客户端
        socket.broadcast(msg); 
    })

    client.on('close',()=>{
        socket.broadcast(JSON.stringify({status:0,data:'logout'}));  
    })

})

// socket.clients以数组的形式保存所有客户端
//定义广播方法
socket.broadcast = msg=>{  
    socket.clients.forEach(client=>{ 
        client.send(msg)
    });  
}; 