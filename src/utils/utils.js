const fs = require('fs')

const readFunction=(path)=>{
   return fs.readFileSync(path,'utf-8')
}

module.exports={
    readFunction
}