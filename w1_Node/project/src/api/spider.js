const request = require('request');
const express = require('express');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/nanshig',(req,res)=>{
    request.get('https://www.nanshig.com/mobile/index.php?act=goods&op=goods_list&keyword=&page=10&curpage=1', (error, response, body) => {
          // error: 错误信息，默认null
          // response: 响应对象
          // body: 请求响应内容
          res.send(body);
    });
})

app.get('/getimg',(req,res)=>{
    let arr = []
    request('http://list.jiuxian.com/search.htm?v=2&key=%E6%8B%89%E8%8F%B2&isOwn=1&area=6',(err,response,body)=>{
        // body => html代码
        // 在服务端没有dom操作
        request
        const $ = cheerio.load(body);
        $('li','.proListSearch').each((idx,cli)=>{
            let $li = $(cli);
            let imgurl = $li.find('img').attr('src');
            let filename = path.basename(imgurl);

            let goods = {
                productId:$li.attr('product-box'),
                name:$li.find('.proName a').attr('title'),
                imgurl: filename,
                judge:$li.find('.judge span').text()
            }

            arr.push(goods)

            request(imgurl).pipe(fs.WriteStream('./uploads/'+filename))
        })

        // res.send(arr);
        let ids = arr.map(item=>item.productId).join();

        request.get('http://list.jiuxian.com/act/selectPriceAndClubPriceByProIds.htm',{
            params:{
                ids
            },
            headers:{
                // cookies:''
            }
        },(err,response,body)=>{
            let prices = JSON.parse(body).data;
            // arr:[{id,imgurl,name,judag}]
            // prices:[{id,price1,price2}]

            arr = arr.map(item=>{
                for(let i=0;i<prices.length;i++){
                    if(item.productId == prices[i].productId){
                        Object.assign(item,prices[i]);
                        break;
                    }
                }
                return item;
            })

            res.send(arr);
        })
    })
})

app.listen(1902,()=>{
    console.log('success');
})