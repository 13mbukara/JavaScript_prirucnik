mojProzor = window.open("", "", "width=200,height=100");
mojProzor.document.write(
  "Test prozor za funkcije: MoveBy, MoveTo, ResizeBy i ResizeTo"
);
function pomeriProzorRelativno() {
  mojProzor.moveBy(50, 50);
}
function pomeriProzorApsolutno() {
  mojProzor.moveTo(50, 50);
}
function promeniVelicinuRelativno() {
  mojProzor.resizeBy(-10, -10);
}
function promeniVelicinuApsolutno() {
  mojProzor.resizeTo(500, 300);
}
document.getElementById("1").addEventListener("click", pomeriProzorRelativno);
document.getElementById("2").addEventListener("click", pomeriProzorApsolutno);
document
  .getElementById("3")
  .addEventListener("click", promeniVelicinuRelativno);
document
  .getElementById("4")
  .addEventListener("click", promeniVelicinuApsolutno);
