// グローバル変数
let gameBoard;
let currentPlayer;

// ゲームの初期化
function initGame() {
  gameBoard = [];
  for (let i = 0; i < 8; i++) {
    gameBoard[i] = [];
    for (let j = 0; j < 8; j++) {
      gameBoard[i][j] = null;
    }
  }
  // 初期配置
  gameBoard[3][3] = 'white';
  gameBoard[3][4] = 'black';
  gameBoard[4][3] = 'black';
  gameBoard[4][4] = 'white';

  currentPlayer = 'black';
}

// ゲームボードの描画
function drawBoard() {
  const boardElement = document.getElementById('game-board');
  boardElement.innerHTML = '';

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.onclick = () => handleCellClick(i, j);

      if (gameBoard[i][j]) {
        const stone = document.createElement('div');
        stone.className = `stone ${gameBoard[i][j]}`;
        cell.appendChild(stone);
      }

      boardElement.appendChild(cell);
    }
  }

  updateStatus();
}

function updateStatus() {
  const statusElement = document.getElementById('status');
  statusElement.textContent = `現在のプレイヤー: ${currentPlayer === 'black' ? '黒' : '白'}`;
}

// クリックイベントの処理
function handleCellClick(row, col) {
  if (gameBoard[row][col] !== null) {
    return; // すでに石がある場合は何もしない
  }

  if (isValidMove(row, col)) {
    gameBoard[row][col] = currentPlayer;
    flipStones(row, col);
    currentPlayer = currentPlayer === 'black' ? 'white' : 'black';

    if (checkPass()) {
      currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
      if (checkPass()) {
        // 両プレイヤーがパスした場合、ゲーム終了
        updateStatus();
        return;
      }
    }

    drawBoard();
  }
}

function isValidMove(row, col) {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  for (const [dx, dy] of directions) {
    if (checkDirection(row, col, dx, dy)) {
      return true;
    }
  }

  return false;
}

function checkDirection(row, col, dx, dy) {
  let x = row + dx;
  let y = col + dy;

  if (x < 0 || x >= 8 || y < 0 || y >= 8 || gameBoard[x][y] === null) {
    return false;
  }

  if (gameBoard[x][y] === currentPlayer) {
    return false;
  }

  while (true) {
    x += dx;
    y += dy;

    if (x < 0 || x >= 8 || y < 0 || y >= 8) {
      return false;
    }

    if (gameBoard[x][y] === null) {
      return false;
    }

    if (gameBoard[x][y] === currentPlayer) {
      return true;
    }
  }
}

function flipStones(row, col) {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  for (const [dx, dy] of directions) {
    if (checkDirection(row, col, dx, dy)) {
      flipDirection(row, col, dx, dy);
    }
  }
}

function flipDirection(row, col, dx, dy) {
  let x = row + dx;
  let y = col + dy;

  while (gameBoard[x][y] !== currentPlayer) {
    gameBoard[x][y] = currentPlayer;
    x += dx;
    y += dy;
  }
}

function checkGameOver() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (gameBoard[i][j] === null && isValidMove(i, j)) {
        return false; // まだ有効な手がある
      }
    }
  }
  return true; // 有効な手がない
}

function determineWinner() {
  let blackCount = 0;
  let whiteCount = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (gameBoard[i][j] === 'black') {
        blackCount++;
      } else if (gameBoard[i][j] === 'white') {
        whiteCount++;
      }
    }
  }

  if (blackCount > whiteCount) {
    return '黒の勝ち';
  } else if (whiteCount > blackCount) {
    return '白の勝ち';
  } else {
    return '引き分け';
  }
}

function updateStatus() {
  const statusElement = document.getElementById('status');
  if (checkGameOver()) {
    statusElement.textContent = `ゲーム終了: ${determineWinner()}`;
  } else {
    statusElement.textContent = `現在のプレイヤー: ${currentPlayer === 'black' ? '黒' : '白'}`;
  }
}

function checkPass() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (gameBoard[i][j] === null && isValidMove(i, j)) {
        return false; // 置ける場所がある
      }
    }
  }
  return true; // 置ける場所がない
}

document.getElementById('restart-button').addEventListener('click', () => {
  initGame();
  drawBoard();
});

// ゲームの開始
initGame();
drawBoard();