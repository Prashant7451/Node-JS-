const {createReadStream} = require('fs')

const stream = createReadStraem('./content/big.txt')

stream.on('data',(result)=>
{
  console.log(result)
})