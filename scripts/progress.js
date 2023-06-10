function updateProgress(gate) {
  const completed = localStorage.hasOwnProperty(gate);
  if (!completed) {
    localStorage.setItem(gate, "completed");
  } else {
    alert("already done :D");
  }
}

function clearProgress() {
  localStorage.clear();
}
