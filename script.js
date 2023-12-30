const carousel = document.getElementById("carousel");
const modelContainer = carousel.querySelector(".model-container");
const modelViewer = modelContainer.querySelector("model-viewer");
const colors = {
    celeste: '#B0E3F2',
    blanco: '#fff',
    negro:'#000',
    amarillo: '#F7E992',
    rojo: '#FF7751',
}

let currentModelIndex = 0;
currentModelIndex = (currentModelIndex - 1 + modelos.length) % modelos.length;

function changeModelColor(modelId, color) {
  const model = document.getElementById(modelId);
  console.log("model", model);
  if ((model === 'model1')) {
    model.setAttribute(
      "src",
      `https://cdn.glitch.me/bf01215d-2e55-4604-8ba8-4528ec10c707/dise%C3%B1o1color${color}.glb?v=1703802417670`
    );
  } else if ((model === 'model2')) {
    model.setAttribute(
      "src",
      `https://cdn.glitch.me/bf01215d-2e55-4604-8ba8-4528ec10c707/dise%C3%B1o2color${color}.glb?v=1703802598584`
    );
  } else {
    model.setAttribute(
      "src",
      `https://cdn.glitch.me/bf01215d-2e55-4604-8ba8-4528ec10c707/dise%C3%B1o3color${color}.glb?v=1703802623090`
    );
  }
}

function prevModel() {
  currentModelIndex = (currentModelIndex - 1 + modelos.length) % modelos.length;
  console.log(currentModelIndex);
  console.log("modelid", modelos[currentModelIndex].id);
  modelId = modelos[currentModelIndex].id;
  updateModelWithAnimationLeft();
}

function nextModel() {
  currentModelIndex = (currentModelIndex + 1) % modelos.length;
  modelId = modelos[currentModelIndex].id;
  updateModelWithAnimation();
}

function updateModel() {
  let imgElementPrev = document.getElementById("prevImage");
  let imgElementNext = document.getElementById("nextImage");
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
  modelViewer.setAttribute("id", currentModel.id);
  modelViewer.setAttribute("src", currentModel.src);
  modelViewer.setAttribute("ios-src", currentModel.iosSrc);
  modelViewer.setAttribute("poster", currentModel.poster);
  modelViewer.setAttribute("alt", currentModel.alt);
  modelViewer.setAttribute("shadow-intensity", currentModel.shadowIntensity);
  modelViewer.setAttribute("camera-controls", currentModel.cameraControls);
  modelViewer.setAttribute("auto-rotate", currentModel.autoRotate);
  modelViewer.setAttribute("ar", currentModel.ar);
}

function updateModelWithAnimationLeft() {
  modelContainer.style.transition = "transform 0.1s";
  modelContainer.style.transform = "translateX(-100%)";
  setTimeout(() => {
    modelContainer.style.transition = "";
    modelContainer.style.transform = "";
    updateModel();
  }, 100);
}
function updateModelWithAnimation() {
  modelContainer.style.transition = "transform 0.1s";
  modelContainer.style.transform = "translateX(100%)";
  setTimeout(() => {
    modelContainer.style.transition = "";
    modelContainer.style.transform = "";
    updateModel();
  }, 100);
}
updateModel();
