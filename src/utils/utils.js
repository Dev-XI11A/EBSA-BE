const e = require('express')
const fs = require('fs')

const readFunction=(path)=>{
   return fs.readFileSync(path,'utf-8')
}

const writeFunction=(path,body)=>{
    if(!fs.existsSync(path)){
        fs.closeSync(fs.openSync(path,'w'))
    }
    let data = readFunction(path)
    if(data.length==0){
        fs.writeFileSync(path, JSON.stringify([body],null,2));
        console.log(data)
    }
    else{
        let jsonData = JSON.parse(data.toString())
        jsonData.push(body)
        fs.writeFileSync(path, JSON.stringify(jsonData,null,2))
    }
    return body
     
}

module.exports={
    readFunction,
    writeFunction
}