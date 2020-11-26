const md5 = require('md5')

const salt = 'yjdafjpo'
// const salt = 'abc'
let counter = 0

const hashes = []
const keys = []

while (true) {
  const string = salt + counter

  let hash
  if (!hashes[counter]) {
    hash = makeHash(string)
    hashes[counter] = hash
  } else {
    hash = hashes[counter]
  }

  const triple = hasTriple(hash)

  if (triple) {
    // console.log('triple', counter, hash, hasTriple(hash))

    for (let i = counter+1; i <= counter + 1000; i++) {
      const string = salt + i

      let newHash
      if (!hashes[i]) {
        newHash = makeHash(string)
        hashes[i] = newHash
      } else {
        newHash = hashes[i]
      }

      const quintuple = hasQuintuple(newHash, triple)
      if (quintuple) {
        keys.push(counter)

        console.log('quintuple', counter, i, keys.length, hash, newHash, triple, quintuple)

        break;
      }
    }
  }

  if (keys.length === 64) {
    break
  }

  counter++
}

console.log(keys)

function hasTriple(string) {
  for (let i = 0; i <= string.length - 3; i++) {
    if (string[i] ===  string[i+1] && string[i+1] === string[i+2]) return string[i]
  }

  return null
}

function hasQuintuple(string, char) {
  for (let i = 0; i <= string.length - 5; i++) {
    if (char === string[i] && string[i] ===  string[i+1] && string[i+1] === string[i+2] && string[i+2] === string[i+3] && string[i+3] === string[i+4]) return string[i]
  }

  return null
}

function makeHash(string) {
  // 1.
  // return md5(string)

  // 2.
  for (let i = 0; i < 2017; i++) {
    string = md5(string)
  }

  return string
}
