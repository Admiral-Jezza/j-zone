const imgCount = 2;

let y = Math.floor(Math.random() * imgCount);


function imgGrab() {
    var img = document.getElementById("mainImage");
    img.innerHTML = "<img src=\"https://files.catbox.moe/wgyxdn.png\">"
}

imgGrab();