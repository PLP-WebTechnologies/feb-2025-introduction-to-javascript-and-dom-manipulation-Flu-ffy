// change text dynamically
function changeText() {
    const tittles = document.getElementById("tittles");
    tittles.textContent = "Being proficient";
}


//Modifies CSS styles via JavaScript using an id element
function changeColor() {
    const content = document.getElementById("content");
    content.style.color = "blue";
    content.style.fontSize = "20px";
    content.style.fontFamily = "Arial, sans-serif";
    content.style.backgroundColor = "lightgray";
}

//Modifies CSS styles via JavaScript using a class element
const paragraphs = document.querySelectorAll(".paragraph");
paragraphs.forEach((paragraph) => {
    paragraph.style.color = "blue";
    paragraph.style.fontSize = "18px";
    paragraph.style.fontFamily = "Arial, sans-serif";
    paragraph.style.backgroundColor = "lightyellow";
})



//add element to the page when a button is clicked
function addElement() {
    const container = document.getElementById('container');
    const newDiv = document.createElement('div');
    newDiv.textContent = "I'm a new element!";
    newDiv.className = "dynamic-box";
    container.appendChild(newDiv);
  }

  //remove the last element from the page when a button is clicked
function removeElement() {
    const container = document.getElementById('containers');
    if (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  }