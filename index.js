let c = 0;
document.getElementById("i").onclick = function () {
  c++;
  document.getElementById("s").textContent = c;
};
document.getElementById("r").onclick = function () {
  c = 0;
  document.getElementById("s").textContent = c;
};
document.getElementById("d").onclick = function () {
  c--;
  document.getElementById("s").textContent = c;
};
