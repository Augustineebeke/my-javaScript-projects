const container = document.querySelector('#container');

const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () => {
    let size = prompt("Enter Grid size (Max. 100):");
    if (size > 100) size = 100;
    createGrid(size);
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

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

        // Set the Initial state: transparent and assign a random color once.
        square.style.backgroundColor = getRandomColor();
        square.style.opacity = "0";

        // The Interaction through Hower Effect
        square.addEventListener('mouseover', () => {
            // Get current opacity and turn it into a number.
            let currentOpacity = parseFloat(square.style.opacity);

            // If it's less than 1 (100%), add 0.1 (10%).
            if (currentOpacity < 1) {
                square.style.opacity = (currentOpacity + 0.1).toString();
            }
        });

        container.appendChild(square);
    }
}

// Start with a 16x16 Grid.
createGrid(16);