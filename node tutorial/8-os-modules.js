const os = require('os')

//INFO ABOUT CURRENT USE
const user =os.userInfo()
console.log(user)
//methods returns the sysytems uptime in seconds 

console.log('The System Uptime is ${os.uptime()} seconds  ')

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),

} 
console.log(currentOS)

 