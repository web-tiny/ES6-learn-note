const fs = require('fs')
const readfile = function (filename) {
  return new Promise((resolve, reject) => {
    fs.readfile(filename, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

// async
async function fn(){
  let f1 = await readfile('./data/a.txt')
  console.log(f1.toString())
  let f2 = await readfile('./data/b.txt')
  console.log(f2.toString())
  let f3 = await readfile('./data/c.txt')
  console.log(f3.toString())
}
fn()

async function fn1(){
  let [a, b, c] = await Promise.all([
    readfile('./data/a.txt'),
    readfile('./data/b.txt'),
    readfile('./data/c.txt')
  ])
  console.log(a.toString())
  console.log(b.toString())
  console.log(c.toString())
}
fn1()