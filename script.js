//your code here
// get all the draggable elements
const images = document.querySelectorAll(".image");

let draggedElement = null;

// add event listeners to all draggable elements
images.forEach((image) => {
  image.addEventListener("dragstart", dragStart);
  image.addEventListener("dragover", dragOver);
  image.addEventListener("dragenter", dragEnter);
  image.addEventListener("dragleave", dragLeave);
  image.addEventListener("drop", drop);
  image.addEventListener("dragend", dragEnd);
});

// functions for drag and drop
function dragStart() {
  draggedElement = this;
  setTimeout(() => {
    this.classList.add("hidden");
  }, 0);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}

function dragLeave() {
  this.classList.remove("hovered");
}

function drop() {
  const currentElement = this;
  const currentImg = currentElement.style.backgroundImage;
  const draggedImg = draggedElement.style.backgroundImage;
  currentElement.style.backgroundImage = draggedImg;
  draggedElement.style.backgroundImage = currentImg;
}

function dragEnd() {
  this.classList.remove("hidden");
  this.classList.remove("hovered");
}