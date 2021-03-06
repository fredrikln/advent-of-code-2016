const magicNumber = 1364

const map = [[true]]

const isOpen = (x,y) => {
  if (!map[y]) map[y] = []
  const open = ((x*x) + (3*x) + (2*x*y) + y + (y*y) + magicNumber).toString(2).replace(/0/g, '').length % 2 == 0
  map[y][x] = open
  return open
}


const createNode = (x,y,steps) => ({ x, y, steps })

const target = createNode(31,39)
const start = createNode(1,1,0)
const nodes = []
const queue = [start]

const directionsToCheck = [[0,1],[0,-1],[1,0],[-1,0]]

while (queue.length > 0) {
  const current = queue.shift()

  if (current.x === target.x && current.y === target.y) {
    console.log('Part 1: Target reached!', current)
    break
  }

  const x = current.x
  const y = current.y

  const newSteps = current.steps + 1

  for (const direction of directionsToCheck) {
    const [dirX,dirY] = direction

    const newX = x+dirX
    const newY = y+dirY

    if (newX < 0 || newY < 0) continue
    if (!isOpen(newX, newY)) continue

    if (!nodes[newY] || !nodes[newY][newX]) {
      if (!nodes[newY]) nodes[newY] = []
      nodes[newY][newX] = createNode(newX, newY, newSteps)

      queue.push(nodes[newY][newX])
    }
  }
}

drawMap()

console.log('Part 2: Nodes able to be reached within 50 steps:', nodes.flat().filter(n => n.steps <= 50).length)

function drawMap() {
  let out = ''
  for (let y = 0; y < map.length; y++) {
    out += '#'
    for (let x = 0; x < map[y].length; x++) {
      if (x == start.x && y == start.y) out += 'S'
      else if (x == target.x && y == target.y) out += 'G'
      else out += map[y][x] !== undefined ? map[y][x] ? '.' : '#' : ' '
    }
    out += "\n"
  }
  console.log(out)
}
