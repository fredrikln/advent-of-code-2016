const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n')[0]
const md5 = require('md5')

const base = input

let counter = 0
let password = ''
while (password.length !== 8) {
  if (counter % 100000 === 0) console.log(counter)

  const hash = md5(`${base}${counter}`)

  if (hash.slice(0,5) === '00000') password += hash.slice(5,6)

  counter++
}

console.log('Part 1:', password)

counter = 0
password = '        '
while (password.indexOf(' ') !== -1) {
  if (counter % 100000 === 0) console.log(counter)

  const hash = md5(`${base}${counter}`)

  if (hash.slice(0,5) === '00000') {
    const position = Number(hash.slice(5,6))
    const char = hash.slice(6,7)
    console.log(position, char)

    if (position >= 0 && position <= 7 && password.slice(position, position + 1) === ' ') {
      password = password.slice(0, position) + char + password.slice(position + 1)
      console.log(password)
    }
  }

  counter++
}

console.log('Part 2:', password)
