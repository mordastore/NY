// Открытие сертификата с анимацией и конфетти
document.getElementById('openBtn').addEventListener('click', function () {
  const cert = document.getElementById('cert');
  const cover = document.getElementById('cover');
  cover.style.display = 'none';
  cert.classList.add('show');
  fireConfetti();
});

// Эмодзи-дождь (новогодние)
function createEmojiRain() {
  const container = document.querySelector('.emoji-container');
  const emojis = ['🎄', '❄️', '🎁', '✨', '☃️'];
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = `${Math.random() * 100}%`;
  emoji.style.animationDuration = `${3 + Math.random() * 3}s`;
  emoji.style.fontSize = `${20 + Math.random() * 20}px`;
  container.appendChild(emoji);
  setTimeout(() => emoji.remove(), 6000);
}
setInterval(createEmojiRain, 300);

// Конфетти-взрыв из центра
function fireConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let pieces = [];
  const count = 120;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const colors = ['#ff0000', '#ffffff', '#66cc66', '#ffcc00'];

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 5 + 3;
    pieces.push({
      x: centerX,
      y: centerY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 60
    });
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });
    pieces = pieces.filter(p => p.life > 0);
    if (pieces.length > 0) {
      requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  update();
}

// ❄️ Снежинки
const snowContainer = document.createElement('div');
snowContainer.classList.add('snow-container');
document.body.appendChild(snowContainer);

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄️';
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.animationDuration = 3 + Math.random() * 5 + 's';
  snowflake.style.fontSize = 12 + Math.random() * 24 + 'px';
  snowContainer.appendChild(snowflake);
  setTimeout(() => snowflake.remove(), 8000);
}
setInterval(createSnowflake, 250);
