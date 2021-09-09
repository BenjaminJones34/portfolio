const nextButton = document.getElementById("next");
const image = document.getElementById("image");
const tooltip = document.getElementById("tooltip");

let currentImage = "dog";
console.log(image.height)

nextButton.addEventListener("click", ()=> {
    if (currentImage == "dog") {
        tooltip.style.filter = "blur(20px)";
        image.style.filter = "blur(40px)";
        window.setTimeout(()=> {
            image.src = "images/tww2.png";
            image.style.width = "80%";
            image.style.filter = "none";
            currentImage = "tww2";
            tooltip.style.filter = "none";
            tooltip.textContent = "This is my favourite game right now. I have clocked in over 1400 hrs";
        }, 1000);
    } else {
        tooltip.style.filter = "blur(20px)";
        image.style.filter = "blur(40px)";
        window.setTimeout(()=> {
            image.src = "images/cairnterrier.png";
            image.style.width = "60%";
            image.style.filter = "none";
            currentImage = "dog";
            tooltip.style.filter = "none";
            tooltip.textContent = "Not actually me, nor my dog, although looks like him";
        }, 1000);
    }
});