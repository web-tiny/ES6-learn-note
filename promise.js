const fs = require('fs')
const readfile = function (filename) {
  return new Promise((resolve, reject) => {
    fs.readfile(filename, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}
// Promise 的方式
readfile('./data/a.txt').then(res => {
  console.log(res.toString())
  return readfile('./data/b.txt')
})
.then(res => {
  console.log(res.toString())
  return readfile('./data/c.txt')
})
.then(res => {
  console.log(res.toString())
})
.catch(erro => {
  console.log(error)
})