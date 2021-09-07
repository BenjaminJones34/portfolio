const nextButton = document.getElementById("next");
const image = document.getElementById("image");
const tooltip = document.getElementById("tooltip");

let currentImage = "dog";
console.log(image.height)

nextButton.addEventListener("click", ()=> {
    if (currentImage == "dog") {
        image.src = "images/tww2.png";
        image.style.maxWidth = "80%";
        currentImage = "tww2";
        tooltip.textContent = "This is my favourite game right now. I have clocked in over 1400 hrs";
    } else {
        image.src = "images/cairnterrier.png";
        image.style.minWidth = "50%";
        currentImage = "dog";
        tooltip.textContent = "Not actually me, nor my dog, although looks like him";
    }
});