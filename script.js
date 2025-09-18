// Function to generate time options (12-hour format, hourly)
function populateTimeOptions(selectId) {
  const select = document.getElementById(selectId);
  for (let hour = 0; hour < 24; hour++) {
    let suffix = hour >= 12 ? "PM" : "AM";
    let displayHour = hour % 12 || 12;
    let timeString = `${displayHour}:00 ${suffix}`;

    let option = document.createElement("option");
    option.value = timeString;
    option.textContent = timeString;
    select.appendChild(option);
  }
}

// Populate all selects
["wakeUpTime", "lunchTime", "napTime", "nightTime"].forEach(id =>
  populateTimeOptions(id)
);

// Handle Set Alarm button click
document.getElementById("setAlarmBtn").addEventListener("click", () => {
  const wakeUp = document.getElementById("wakeUpTime").value;
  const lunch = document.getElementById("lunchTime").value;
  const nap = document.getElementById("napTime").value;
  const night = document.getElementById("nightTime").value;

  const resultDiv = document.getElementById("alarmResult");
  resultDiv.innerHTML = `
    ⏰ <b>Alarms Set:</b><br>
    🌅 Wake Up: ${wakeUp}<br>
    🍴 Lunch: ${lunch}<br>
    😴 Nap: ${nap}<br>
    🌙 Night: ${night}
  `;
  resultDiv.style.display = "block";
});
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 24h → 12h format

  document.getElementById("hours-display").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes-display").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds-display").textContent = seconds.toString().padStart(2, "0");
  document.getElementById("ampm-display").textContent = ampm;
}

// Toggle AM/PM manually (just for demo)
function toggleAmPm() {
  const ampmElement = document.getElementById("ampm-display");
  ampmElement.textContent = ampmElement.textContent === "AM" ? "PM" : "AM";
}

// Update every second
setInterval(updateClock, 1000);
updateClock();
