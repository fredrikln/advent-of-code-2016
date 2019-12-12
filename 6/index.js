const fs = require('fs')
const lines = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n')

// const lines = [
//   'eedadn',
//   'drvtee',
//   'eandsr',
//   'raavrd',
//   'atevrs',
//   'tsrnev',
//   'sdttsa',
//   'rasrtv',
//   'nssdts',
//   'ntnada',
//   'svetve',
//   'tesnvt',
//   'vntsnd',
//   'vrdear',
//   'dvrsen',
//   'enarar',
// ]

const letterFrequencies = Array.from({ length: lines[0].length }, () => ({}))

lines.forEach(word => {
  word.split('').forEach((letter, i) => {
    if (!letterFrequencies[i][letter]) letterFrequencies[i][letter] = 0
    letterFrequencies[i][letter]++
  })
})

const word = letterFrequencies.map(letter => Object.keys(letter).sort((a, b) => letter[a] > letter[b] ? -1 : 1)[0]).join('')
const word2 = letterFrequencies.map(letter => Object.keys(letter).sort((a, b) => letter[a] > letter[b] ? 1 : -1)[0]).join('')

console.log('Part 1: ', word)
console.log('Part 2: ', word2)
