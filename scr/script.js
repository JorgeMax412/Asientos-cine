function updateCountdown() {
  const targetDate = new Date("September 14, 2025 11:00:00");
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.querySelector(".countdown").innerHTML = "<h2>¡Llegó el día! 🎊</h2>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);