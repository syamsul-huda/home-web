
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

  //Praying Time
  document.addEventListener('DOMContentLoaded', async () => {
  const citySelect = document.getElementById('citySelect');

  async function fetchPrayerTimes(city) {
    try {
      const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Indonesia&method=2`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data.data.timings;
    } catch (error) {
      console.error('Error fetching prayer times:', error);
    }
  }

  function displayPrayerTimes(timings) {
    if (timings) {
      document.querySelector('.subuh').textContent = timings.Fajr;
      document.querySelector('.dzuhur').textContent = timings.Dhuhr;
      document.querySelector('.ashar').textContent = timings.Asr;
      document.querySelector('.magrib').textContent = timings.Maghrib;
      document.querySelector('.isya').textContent = timings.Isha;
    }
  }

  async function updatePrayerTimes() {
    const selectedCity = citySelect.value;
    const timings = await fetchPrayerTimes(selectedCity);
    displayPrayerTimes(timings);
  }

  // Update when the city changes
  citySelect.addEventListener('change', updatePrayerTimes);

  // Initial load
  updatePrayerTimes();
});
