function generate_rgb () {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
}

function generate_squares (number) {
  grid.textContent = '';
  grid.style['backgroundColor'] = 'white';
  let totalSquares = number * number;
  for (let i = 0; i < totalSquares; i++) {
    const squares = document.createElement('div');
    squares.className = 'squares';
    // squares.style['backgroundColor'] = generate_rgb();
    squares.style['width'] = `${(700/number)}` + 'px';
    squares.addEventListener('mouseover', () => {
      squares.style['backgroundColor'] = generate_rgb();
    })

    grid.appendChild(squares)
  }
}

const container = document.querySelector('#container');

const title = document.createElement('h1');
title.textContent = 'Etch-a-Sketch';
title.className = 'title';

const changeSize = document.createElement('button');
changeSize.className = 'changeSize';
changeSize.textContent = 'Set Grid Size';
changeSize.addEventListener('click', () => {
  let gridSize = Number(prompt('Choose a number between 1 and 100'));
  while (gridSize < 1 || gridSize > 100) {
    gridSize = Number(prompt('Choose a number between 1 and 100'))
  }
  generate_squares(gridSize);
})


const grid = document.createElement('div');
grid.className = 'grid';

container.appendChild(title);
container.appendChild(changeSize);
container.appendChild(grid);

