
//Date & Time
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('id-ID', options);
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    document.getElementById('date').textContent = formattedDate;
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();