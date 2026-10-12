const button = document.querySelector("button");

const texte = document.querySelector("p");

let countDown;

button.addEventListener("click", () => {
  texte.classList.remove("hidden");

  clearInterval(countDown);

  countDown = setInterval(() => {
    texte.classList.add("hidden");
    clearInterval(countDown);
  }, 3000);
});
