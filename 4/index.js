const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n')

const pattern = /([a-z-]+)-([0-9]+)\[([a-z]+)\]/

const calculateChecksum = name => {
  const letters = name.replace(/-/g, '').split('').reduce((acc, letter) => {
    if (!acc[letter]) acc[letter] = 0
    acc[letter]++
    return acc
  }, {})

  return Object.keys(letters).sort().sort((a, b) => letters[a] > letters[b] ? -1 : 1).join('').slice(0, 5)
}

const checksumMatch = (room) => {
  const [, name, number, checksum] = room.match(pattern)

  if (checksum === calculateChecksum(name)) return true

  return false
}

const rooms = input.filter(room => checksumMatch(room))

const sum = rooms.reduce((acc, room) => {
  const [, name, number, checksum] = room.match(pattern)

  return acc + Number(number)
}, 0)

console.log('Part 1', sum)

const shiftLetters = (name, times) => {
  return name.split('').map(char => {
    if (char === '-') return char

    const charCode = ((char.charCodeAt(0) - 97 + times) % 26) + 97
    return String.fromCharCode(charCode)
  }).join('')
}

const realNames = rooms.map(room => {
  const [, name, number, checksum] = room.match(pattern)

  return [shiftLetters(name, Number(number)), Number(number), checksum]
})

realNames.forEach(room => {
  if (room[0].indexOf('north') !== -1) { console.log(room) }
})
