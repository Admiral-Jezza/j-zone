const imgArray = [
    "https://files.catbox.moe/wgyxdn.png",
    "https://files.catbox.moe/p9nw5f.png",
    "https://files.catbox.moe/87xrfe.png"
]


let y = Math.floor(Math.random() * imgArray.length);


function imgGrab() {
    var img = document.getElementById("mainImage");
    var imgLink = "<img src=\"" + imgArray[y] +  "\">";
    img.innerHTML = imgLink;
}

imgGrab();