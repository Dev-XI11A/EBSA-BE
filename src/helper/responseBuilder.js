const constant = require('./constants')

const successful = (data)=>{
    let result = {
        "code": constant.successCode,
        "message":constant.successful,
        "data":data
    }
    return result
}

module.exports={
    successful
}