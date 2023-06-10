function updateProgress(gate) {
  const completed = localStorage.hasOwnProperty(gate);
  if (!completed) {
    localStorage.setItem(gate, "completed");
  }
}

function clearProgress() {
  localStorage.clear();
}
