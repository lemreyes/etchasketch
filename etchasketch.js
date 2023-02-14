let mouseIsDown = false;

function generateCanvasElement() {
    const canvas = document.getElementById('canvas');
    console.log(canvas);

    const sizeSlider = document.getElementById('size-slider');
    const size = sizeSlider.value;
    console.log(sizeSlider);
    console.log(size);

    // delete current child elements
    canvas.replaceChildren();

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const canvasElement = document.createElement("div");
            canvasElement.className = "canvas-element";
            canvas.appendChild(canvasElement);

            canvasElement.addEventListener("mousedown", () => {
                mouseIsDown = true;
                canvasElement.style.backgroundColor = "black";
            });

            canvasElement.addEventListener("mouseup", () => {
                mouseIsDown = false;
            });

            canvasElement.addEventListener("mouseover", () => {
                if (mouseIsDown === true) {
                    canvasElement.style.backgroundColor = "black";
                } else {
                    // do nothing
                }

            });
        }
    }

    // update canvas grid size
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

// slider functionality
const sizeSlider = document.getElementById('size-slider');
sizeSlider.addEventListener("input", () => {
    const sizeValue = document.getElementById('slider-value')
    sizeValue.innerText = sizeSlider.value;
});

// canvas generation
const canvas = document.getElementById('canvas');
window.addEventListener("load", generateCanvasElement);

// canvas update
const updateButton = document.getElementById('updateBtn');
updateButton.addEventListener("click", generateCanvasElement);
