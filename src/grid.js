function grid(n){
    const gridDiv = document.createElement('div');
    let cellCounter = 0;
    gridDiv.id = 'grid';
    for(let i=0; i<n; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');
        for(let j=0; j<n; j++){
            const cell = document.createElement('div');
            const cellNumberText = document.createElement('p');
            cell.classList.add('grid-cell');
            cell.appendChild(cellNumberText);
            row.appendChild(cell);

            cellNumberText.textContent = ++cellCounter;
        }
        gridDiv.appendChild(row);
    }
    return gridDiv;
}

export { grid }