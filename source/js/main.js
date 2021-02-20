
const board = document.querySelector('.board')

function createSeed () {
  const seed = []
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  while (seed.length < 9) {
    const index = Math.ceil(Math.random() * source.length) - 1
    seed.push(source.splice(index, 1))
  }

  return seed
}

function generate () {
  const matrix = []
  const shift = [0, 3, 3, 1, 3, 3, 1, 3, 3]
  let seed = createSeed()
  let cur

  for (let i = 0, li = shift.length; i < li; ++i) {
    cur = shift[i]
    seed = seed.slice(cur).concat(seed.slice(0, cur))
    matrix.push(seed)
  }

  return matrix
}

function populate () {
  const matrix = generate()
  const frag = document.createDocumentFragment()

  matrix.flat().forEach((item) => {
    const el = document.createElement('div')
    el.innerText = item
    frag.appendChild(el)
  })

  board.appendChild(frag)
}

populate()
