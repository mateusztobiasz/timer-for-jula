    const meetingDate = new Date("2025-12-16T22:30:00");

    function updateTimer() {
        const bottomText = document.querySelector(".bottom-text")
        const timerTiles = document.getElementsByClassName('tile');
        const togetherText = document.querySelector(".together-text")

        const daysTileValue = document.getElementById("days")
        const hoursTileValue = document.getElementById("hours")
        const minutesTileValue = document.getElementById("minutes")
        const secondsTileValue = document.getElementById("seconds")

        const now = new Date();
        const diff = meetingDate - now;

        if (diff <= 0) {
            bottomText.hidden = true
            togetherText.hidden = false

            for (let i = 0; i < timerTiles.length; i++){
                timerTiles[i].style.display = "none"
            }
            togetherText.textContent = "We're together babe 🐻"

            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        daysTileValue.textContent = `${days}`
        hoursTileValue.textContent = `${hours}`
        minutesTileValue.textContent = `${minutes}`
        secondsTileValue.textContent = `${seconds}`
    }

    setInterval(updateTimer, 1000);
    updateTimer();