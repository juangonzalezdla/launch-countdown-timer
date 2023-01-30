const timers = document.querySelectorAll('.countdown__timer__elements');
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

setInterval(() => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  for (let i = 0; i < timers.length; i++) {
    const timer = timers[i];
    const timerId = timer.dataset.id;

    switch (true) {
      case timerId === 'days':
        if (days < 10) {
          timer.textContent = '0' + days;
        } else {
          timer.textContent = days;
        }
        break;
      case timerId === 'hours':
        if (hours < 10) {
          timer.textContent = '0' + hours;
        } else {
          timer.textContent = hours;
        }
        break;
      case timerId === 'minutes':
        if (minutes < 10) {
          timer.textContent = '0' + minutes;
        } else {
          timer.textContent = minutes;
        }
        break;
      case timerId === 'seconds':
        if (seconds < 10) {
          timer.textContent = '0' + seconds;
        } else {
          timer.textContent = seconds;
        }
        break;
    }
  }
}, 1000);