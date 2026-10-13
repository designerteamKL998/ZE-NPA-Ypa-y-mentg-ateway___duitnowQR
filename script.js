const bindToggle = (buttonId, contentId) => {
  const button = document.getElementById(buttonId);
  const content = document.getElementById(contentId);

  if (!button || !content) return;

  // Initial state: details are HIDDEN.
  content.classList.remove('open');
  button.classList.remove('open');
  content.style.display = 'none';

  button.addEventListener('click', () => {
    const isOpen = content.classList.contains('open');

    if (isOpen) {
      // Open -> Hide
      content.classList.remove('open');
      button.classList.remove('open');
      content.style.display = 'none';
    } else {
      // Hide -> Show
      content.classList.add('open');
      button.classList.add('open');
      content.style.display = 'block';
    }
  });
};

bindToggle('desktopMore', 'desktopMoreContent');
bindToggle('mobileMore', 'mobileMoreContent');
bindToggle('desktopImportant', 'desktopImportantContent');
bindToggle('mobileImportant', 'mobileImportantContent');

let seconds = 60;
const timers = document.querySelectorAll('.countdown');
let timerFinished = false;

const goToUnsuccessful = () => {
  if (timerFinished) return;
  timerFinished = true;
  window.location.href = 'payment-unsuccessful.html';
};

const renderTimer = () => {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  timers.forEach(x => x.textContent = `${m}:${s}`);
};

renderTimer();
const countdownInterval = setInterval(() => {
  if (seconds <= 0) {
    clearInterval(countdownInterval);
    goToUnsuccessful();
    return;
  }
  seconds--;
  renderTimer();
}, 1000);
