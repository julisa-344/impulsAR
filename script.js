var modelContainers = document.querySelectorAll(".model-container");
var currentIndex = 0;

// Añadir un evento para verificar si el modelo se ha cargado correctamente
modelContainers.forEach(function (container, index) {
    container
        .querySelector("model-viewer")
        .addEventListener("load", function () {
            if (index === currentIndex) {
                showModel(currentIndex);
            }
        });
});

function showModel(index) {
    currentIndex = index;
    modelContainers.forEach(function (container, i) {
        container.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

function prevModel() {
    currentIndex = (currentIndex - 1 + modelContainers.length) % modelContainers.length;
    showModel(currentIndex);
}

function nextModel() {
    currentIndex = (currentIndex + 1) % modelContainers.length;
    showModel(currentIndex);
}

// Call showModel for the initial index
showModel(currentIndex);
