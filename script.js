function updateClock() {
      const clock = document.getElementById('clock');
      const now = new Date();

      // Format hours, minutes, seconds
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      // Display time in HH:MM:SS
      clock.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Update clock every second
    setInterval(updateClock, 1000);

    // Initialize clock on page load
    updateClock();