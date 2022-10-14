//Images in rolls folder must be .pngs and have number names only!

var maxImgs = 3;
let y = Math.floor(Math.random() * maxImgs);

function imgGrab() {
    var img = document.getElementById("mainImage");
    var imgLink = "<img src=\"images/rolls/" + y + ".png\">";
    img.innerHTML = imgLink;
}

imgGrab();