const op = setInterval(incNum, 20);
function incNum() {
  const text = document.getElementById("text");
  const line = document.getElementById("line");

  let a = window.getComputedStyle(line, ":before").getPropertyValue("width");
  a
}
