const btnChangeColor = document.querySelector('.btn')
const getBgColor = document.getElementById('bg-text-show')
const textContainer = document.querySelector('.text-container')

const hexColorArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btnChangeColor.addEventListener('click', changeBgColor)

function changeBgColor() {
  let backgroundColor = '#'
  for (let i = 0; i < 6; i++) {
    backgroundColor += hexColorArr[Math.floor(Math.random() * 15)]
  }
  getBgColor.textContent = backgroundColor
  textContainer.style.backgroundColor = backgroundColor
}
