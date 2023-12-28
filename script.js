const carousel = document.getElementById("carousel");
const modelContainer = carousel.querySelector(".model-container");
const modelViewer = modelContainer.querySelector("model-viewer");

let currentModelIndex = 0;

function prevModel() {
  currentModelIndex = (currentModelIndex - 1 + modelos.length) % modelos.length;
  updateModel();
  if (currentModelIndex > 0) {
    let imgElement = document.getElementById("prevImage");
    imgElement.src = `img${currentModelIndex - 1}.png`;
  }
}

function nextModel() {
  currentModelIndex = (currentModelIndex + 1) % modelos.length;
  updateModel();
  if (currentModelIndex < modelos.length - 1) { // assuming totalModels is the total number of models
    let imgElement = document.querySelector('.attribution .arrow-button img');
    imgElement.src = `img${currentModelIndex}.png`;
  }
}

function updateModel() {
    let imgElementPrev = document.getElementById('prevImage');
    let imgElementNext = document.getElementById('nextImage');
    let prevIndex = currentModelIndex - 1;
    let nextIndex = currentModelIndex + 1;

    // Handle edge cases
    if (prevIndex < 0) {
        prevIndex = modelos.length - 1;
    }
    if (nextIndex >= modelos.length) {
        nextIndex = 0;
    }

    imgElementPrev.src = `assets/img${prevIndex + 1}.png`;
    imgElementNext.src = `assets/img${nextIndex + 1}.png`;
  const currentModel = modelos[currentModelIndex];
  modelViewer.setAttribute("src", currentModel.src);
  modelViewer.setAttribute("ios-src", currentModel.iosSrc);
  modelViewer.setAttribute("poster", currentModel.poster);
  modelViewer.setAttribute("alt", currentModel.alt);
  modelViewer.setAttribute("shadow-intensity", currentModel.shadowIntensity);
  modelViewer.setAttribute("camera-controls", currentModel.cameraControls);
  modelViewer.setAttribute("auto-rotate", currentModel.autoRotate);
  modelViewer.setAttribute("ar", currentModel.ar);
  modelContainer.style.animation = "transformX 0.5s ease-in-out";
  setTimeout(() => {
    modelContainer.style.animation = "";
  }, 500);
}

updateModel();