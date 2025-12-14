const meetingDate = new Date("2025-12-16T18:00:00");

function updateTimer() {
  const now = new Date();
  const diff = meetingDate - now;

  if (diff <= 0) {
    document.getElementsByClassName("timer")[0].textContent = "We're together ❤️";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementsByClassName("timer")[0].textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);
updateTimer();