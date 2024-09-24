document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById('chessboard');

    // Chessboard layout for pieces (P=pawn, R=rook, N=knight, B=bishop, Q=queen, K=king)
    const initialBoard = [
        ['black-rook', 'black-knight', 'black-bishop', 'black-queen', 'black-king', 'black-bishop', 'black-knight', 'black-rook'],
        ['black-pawn', 'black-pawn', 'black-pawn', 'black-pawn', 'black-pawn', 'black-pawn', 'black-pawn', 'black-pawn'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['white-pawn', 'white-pawn', 'white-pawn', 'white-pawn', 'white-pawn', 'white-pawn', 'white-pawn', 'white-pawn'],
        ['white-rook', 'white-knight', 'white-bishop', 'white-queen', 'white-king', 'white-bishop', 'white-knight', 'white-rook'],
    ];

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = 'square';
            if ((row + col) % 2 === 0) {
                square.classList.add('white');
            } else {
                square.classList.add('black');
            }

            const piece = initialBoard[row][col];
            if (piece) {
                const img = document.createElement('img');
                img.src = `assets/images/pieces/${piece}.png`;
                img.alt = piece;
                img.style.width = '45px';
                img.style.height = '45px';
                square.appendChild(img);
            }

            board.appendChild(square);
        }
    }
});
