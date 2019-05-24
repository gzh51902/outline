const express = require('express');

const Router = express.Router();

const query = require('../db/mysql');
const {dataFormat} = require('../tools');
// 增
// post /goods
Router.post('/',(req,res)=>{
    // req.body
    // 操作mysql
    let values = ''
    for(let key in req.body){
        values += '"'+ req.body[key] + '",'
    }
    values = values.slice(0,-1);

    query(`insert into goods(name,price,color,size,imgurl,category) values(${values})`).then(data=>{
        if(data){
            res.send(dataFormat())
        }else{
            res.send(dataFormat({status:0}))
        }
    });
});

Router.route('/:id')
    .get(async (req,res)=>{
        // req.query,req.params
        // ES7:
        // await ： 等待promise对象的返回结果
        // await 必须放在async函数中
        // async 函数返回一个promise对象
        let {id} = req.params;
        let data = await query(`select * from goods where id=${id}`)
        res.send(dataFormat({data}))
    })

    .delete((req,res)=>{
        let {id} = req.params;
        query(`delete from goods where id=${id}`).then(data=>{
            res.send(dataFormat({status:data?1:0}))
        })
    })

    .put((req,res)=>{
        let {id} = req.params;
        let keyvalue = '';//name=xxx,price=xx
        for(let key in req.body){
            keyvalue += key +'="' + req.body[key] + '",'
        }
        keyvalue = keyvalue.slice(0,-1);
        query(`update goods set ${keyvalue} where id=${id}`).then(data=>{
            res.send(dataFormat({status:data?1:0}))
        })
    })


module.exports = Router;