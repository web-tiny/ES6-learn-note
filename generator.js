const fs = require('fs')
const readfile = function (filename) {
  return new Promise((resolve, reject) => {
    fs.readfile(filename, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

function * gene() {
  yield readfile('./data/a.txt')
  yield readfile('./data/b.txt')
  yield readfile('./data/c.txt')
}
let ge1 = gene()
ge1.next().value.then(res => {
  console.log(res.toString())
  return ge1.next().value
}).then(res => {
  console.log(res.toString())
  return ge1.next().value
}).then(res => {
  console.log(res.toString())
}).catch(erro => {
  console.log(erro)
})