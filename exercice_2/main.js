const chrono = document.getElementById("chrono");

const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reprendre = document.getElementById("reprendre");

let secondes = 0;
let minutes = 0;
let timer;

function render() {
  if (secondes >= 60) {
    secondes = 0;
    minutes++;
  }

  let affichageMin = minutes < 10 ? "0" + minutes : minutes;
  let affichageSec = secondes < 10 ? "0" + secondes : secondes;
  chrono.textContent = `${affichageMin}:${affichageSec}`;
}

function lancerTimer() {
  timer = setInterval(() => {
    secondes++;
    render();
  }, 1000);
}

start.addEventListener("click", () => {
  lancerTimer();

  start.classList.add("hidden");
  pause.classList.remove("hidden");
});

pause.addEventListener("click", () => {
  clearInterval(timer);

  pause.classList.add("hidden");
  reprendre.classList.remove("hidden");
});

reprendre.addEventListener("click", () => {
  lancerTimer();

  pause.classList.remove("hidden");
  reprendre.classList.add("hidden");
});
