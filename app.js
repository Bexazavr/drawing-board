const board = document.querySelector('#board')

let color1 = '#0092ff'
let color2 = '#00bfff'
let color3 = '#00f0ff'
let color4 = '#64ffff'
let color5 = '#bdffff'


const colors = [color1, color2, color3, color4, color5]
const SQUARES_NUMBER = 5120

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  // square.addEventListener('mouseover', () => 
  // setColor(square))
  // square.addEventListener('mouseleave', () => 
  // removeColor(square))
  
  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

// function setColor(element) {
//   const color = getRandomColor()
//   element.style.backgroundColor = color
//   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
// }

function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}


// function removeColor(element) {
//   element.style.backgroundColor = '#1d1d1d'
//   element.style.boxShadow = `0 0 2px #000`
// }

function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}



// function getRandomColor () {
//   const index = Math.floor(Math.random() * colors.length)
//   return colors[index]
// }

function getRandomColor () {
  return colors[Math.floor(Math.random() * colors.length)]
}

