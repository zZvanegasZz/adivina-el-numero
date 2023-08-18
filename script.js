const targetNumber = Math.floor(Math.random() * 100) + 1;
let prevGuess = null;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);

  if (guess === targetNumber) {
    document.getElementById("hint").textContent = `¡Correcto! ¡Has adivinado el número ${targetNumber}!`;
  } else {
    const hint = getHint(guess);
    document.getElementById("hint").textContent = hint;
  }

  prevGuess = guess;
}

function getHint(guess) {
  if (prevGuess === null) {
    return "Inténtalo de nuevo.";
  }

  const prevDiff = Math.abs(prevGuess - targetNumber);
  const currDiff = Math.abs(guess - targetNumber);

  if (currDiff < prevDiff) {
    return "Más caliente";
  } else if (currDiff > prevDiff) {
    return "Más frío";
  } else {
    return "Mantente en la misma zona";
  }
}