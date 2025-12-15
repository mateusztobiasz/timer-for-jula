const meetingDate = new Date("2025-12-16T22:00:00");

function updateTimer() {
    const timer = document.getElementById("timer")
    const bottomText = document.querySelector(".bottom-text")
    const now = new Date();
    const diff = meetingDate - now;

    if (diff <= 0) {
        timer.textContent = "We're together 🐻";
        bottomText.hidden = true

        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timer.textContent = ''
    if (days != 0) {timer.textContent += `${days}d `}
    if (hours != 0) {timer.textContent += `${hours}h `}
    if (minutes != 0) {timer.textContent += `${minutes}m `}
    if (seconds != 0) {timer.textContent += `${seconds}s`}
}

//setInterval(updateTimer, 1000);
//updateTimer();