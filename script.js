const XEl = document.querySelector(".X-box");
const YEl = document.querySelector(".Y-box");

window.addEventListener("mousemove", (event) => {
  XEl.innerHTML = `${event.clientX}`;
  YEl.innerHTML = `${event.clientY}`;
});
