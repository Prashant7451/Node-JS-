const {read file, readFile} = require('fs');



readFile('./content/first.txt','utf8',(err,data)=>{
  if(err){
    return
  }
}else{
  console.log(data)
}
}) 