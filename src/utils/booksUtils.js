const responseBuilder = require('../helper/responseBuilder')
const utils = require('../utils/utils')

const list=(path)=>{
    let data = JSON.parse(utils.readFunction(path))
    return responseBuilder.successful(data)
}

const add=(path,body)=>{
    let result = utils.writeFunction(path,body)
    return responseBuilder.successful(result)
}

module.exports={
    list,
    add
}