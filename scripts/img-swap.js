let image = document.querySelector(".img-wrapper");

image.onclick = function(event) {
    if (event.target.className == "img-wrapper__mini") {
        document.querySelector(".img-wrapper__cover").src = event.target.src;
    }
}