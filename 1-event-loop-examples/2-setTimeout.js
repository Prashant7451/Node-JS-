// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process
//here order  exexution is first third and second