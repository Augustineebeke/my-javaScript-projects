const container = document.querySelector('#container');

const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () => {
    let size = prompt("Enter Grid size (Max. 100):");
    if (size > 100) size = 100;
    createGrid(size);
});

function createGrid(size) {
    // Clear the container first. (This is important for resizing later)
    container.innerHTML = '';

    const squareSize = 960 / size;   // Calculate size so it fits perfectly.
    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Style the size dynamically
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // The Hower Effect
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
}

// Start with a 16x16 Grid.
createGrid(16);