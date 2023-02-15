let mouseIsDown = false;

function updateClassName(currentClassName) {
    const LVL_STRING = "level";  
    let x = currentClassName.slice(-1);
    let num_x = parseInt(x);
    if (num_x < 9) {
        num_x++;
    }
        
    return LVL_STRING + num_x;
}

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
            canvasElement.className = "level0";
            canvas.appendChild(canvasElement);

            canvasElement.addEventListener("mousedown", () => {
                mouseIsDown = true;
                canvasElement.className = updateClassName(canvasElement.className);
            });

            canvasElement.addEventListener("mouseup", () => {
                mouseIsDown = false;
            });

            canvasElement.addEventListener("mouseover", () => {
                if (mouseIsDown === true) {
                    canvasElement.className = updateClassName(canvasElement.className);
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
