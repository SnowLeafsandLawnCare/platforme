const player = document.getElementById('player');
let playerX = 0;
let playerY = 0;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    playerX += 10;
    player.style.left = playerX + 'px';
  } else if (event.key === 'ArrowLeft') {
    playerX -= 10;
    player.style.left = playerX + 'px';
  } else if (event.key === 'ArrowUp') {
    playerY += 100;
    player.style.bottom = playerY + 'px';
  }
});
