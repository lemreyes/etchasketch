function generateCanvasElement(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const canvasElement = document.createElement("div");
            canvasElement.className = "canvas-element";
        }
    }
}