    var modelContainers = document.querySelectorAll(".model-container");
    var currentIndex = 0;

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

    showModel(currentIndex);
