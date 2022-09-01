const responseBuilder = require('../helper/responseBuilder')
const utils = require('../utils/utils')

const list=(path)=>{
    let data = JSON.parse(utils.readFunction(path))
    return responseBuilder.successful(data)
}

module.exports={
    list
}