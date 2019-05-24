function dataFormat({status=1,data=[],msg='success'}={}){
    // 解构默认值，参数默认值

    if(status === 0){
        msg = 'fail'
    }

    return {
        status,
        data,
        msg
    }
}

exports.dataFormat = dataFormat;