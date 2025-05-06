const startBtn = document.getElementById("startBtn");
const stopBtns = document.querySelectorAll(".stop-btn");

let timers = [0, 0, 0, 0];
let intervals = [null, null, null, null];
let startTime = null;

// Load participant names from localStorage
for (let i = 1; i <= 4; i++) {
  const storedName = localStorage.getItem(`lane${i}Name`);
  if (storedName) {
    document.querySelector(`#lane${i} .name`).textContent = storedName;
  }
}

startBtn.addEventListener("click", () => {
  startTime = Date.now();
  for (let i = 0; i < 4; i++) {
    if (!intervals[i]) {
      intervals[i] = setInterval(() => updateTimer(i), 10);
    }
  }
});

stopBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const laneIndex = parseInt(e.target.dataset.lane) - 1;
    clearInterval(intervals[laneIndex]);
    intervals[laneIndex] = null;
  });
});

function updateTimer(index) {
  timers[index] = (Date.now() - startTime) / 1000;
  document.querySelector(`#lane${index + 1} .timer`).textContent = timers[index].toFixed(3);
}
