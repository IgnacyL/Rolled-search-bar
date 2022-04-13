const btn = document.querySelector(".btn");
const inp = document.querySelector(".container");

const active = () => {
  inp.classList.toggle("active");
};
btn.addEventListener("click", active);
