document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openBtn');
  const cert = document.getElementById('cert');
  const emojiContainer = document.querySelector('.emoji-container');

  openBtn.addEventListener('click', function () {
    cert.classList.add('show');
    openBtn.style.display = 'none';
    document.getElementById('cover').style.display = 'none';
  });

  // Падающие эмодзи
  const emojis = ['❄️', '🎄', '🎁'];
  function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${Math.random() * 100}vw`;
    emoji.style.animationDuration = `${4 + Math.random() * 3}s`;
    emojiContainer.appendChild(emoji);

    setTimeout(() => emoji.remove(), 8000);
  }

  setInterval(createEmoji, 300);
});
