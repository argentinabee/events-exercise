document.addEventListener("DOMContentLoaded", function () {
  const boxContainer = document.querySelector("#box-container");
  const newBoxButton = document.querySelector("#new-box-button");
  const colorForm = document.querySelector("#color-form");
  const colorInput = document.querySelector("#color-input");

  let boxColor = "black";
  let boxId = 1;

  colorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    boxColor = colorInput.value;

    const boxes = document.querySelectorAll(".box");

    for (let box of boxes) {
      box.style.backgroundColor = boxColor;
    }

    colorInput.value = "";
  });

  function addNewBox() {
    const newBox = document.createElement("div");

    newBox.classList.add("box");
    newBox.textContent = boxId;
    newBox.dataset.id = boxId;
    newBox.style.backgroundColor = boxColor;

    boxContainer.appendChild(newBox);

    boxId++;
  }

  newBoxButton.addEventListener("click", addNewBox);

  document.addEventListener("dblclick", function (event) {
    if (event.target.classList.contains("box")) {
      event.target.remove();
    }
  });

  document.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("box")) {
      event.target.textContent = `x: ${event.pageX}, y: ${event.pageY}`;
    }
  });

  document.addEventListener("mouseout", function (event) {
    if (event.target.classList.contains("box")) {
      event.target.textContent = event.target.dataset.id;
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.target === colorInput) {
      return;
    }

    if (event.key === "n" || event.key === "N") {
      addNewBox();
    }
  });
});
