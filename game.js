function createGrid() {
  let size = prompt("Enter a size up to 100 as a digit", 16);
  size = Number(size);
  if (size > 100 || isNaN(size)) {
    alert("Please enter a number less than 100.");
    return;
  }

  const container = document.querySelector(".container");
  container.textContent = "";

  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    column.style.backgroundColor = "white";
    for (let i = 0; i < size; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      column.appendChild(square);
    }
    container.appendChild(column);
  }

  container.addEventListener("mouseover", (e) => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    if (Number(e.target.style.opacity) < 1) {
      e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
    }
  });
}

const button = document.querySelector("button");
button.addEventListener("click", createGrid);
