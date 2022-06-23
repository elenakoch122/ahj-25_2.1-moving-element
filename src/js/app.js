import goblinImage from '../img/goblin.png';

const field = document.getElementById('field');
const fieldSize = 4;
const fieldArr = [];
const img = document.createElement('img');
img.classList.add('img');
img.src = goblinImage;
// img.src = '../img/goblin.png';
// img.src = 'https://github.com/netology-code/ahj-homeworks/raw/simplification/dom/pic/goblin.png';
img.alt = 'Красное лицо гоблина';

for (let i = 0; i < fieldSize * fieldSize; i += 1) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  field.appendChild(cell);
  fieldArr.push(cell);
}

setInterval(() => {
  const currentCell = fieldArr.find((item) => item.querySelector('img'));
  if (currentCell) {
    currentCell.querySelector('img').remove();
  }
  fieldArr[Math.floor(Math.random() * fieldArr.length)].append(img);
}, 1000);
