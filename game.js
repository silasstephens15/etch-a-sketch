const size = 16;
let container = document.querySelector(".container");

for (let i = 0; i < size; i++) {
  let column = document.createElement("div");
  column.classList.add("column");
  for (let i = 0; i < size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    column.appendChild(square);
  }
  container.appendChild(column);
}
