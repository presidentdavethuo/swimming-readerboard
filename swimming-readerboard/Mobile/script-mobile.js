const laneInput = document.getElementById("laneNumber");
const nameInput = document.getElementById("participantName");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");

submitBtn.addEventListener("click", () => {
  const lane = parseInt(laneInput.value);
  const name = nameInput.value.trim();
  
  if (lane >=1 && lane <=4 && name) {
    localStorage.setItem(`lane${lane}Name`, name);
    message.textContent = `Saved: Lane ${lane} → ${name}`;
    nameInput.value = "";
    laneInput.value = "";
  } else {
    message.textContent = "Please enter valid lane (1-4) and name.";
  }
});
