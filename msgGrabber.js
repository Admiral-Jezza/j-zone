const msgArray = ["Go to the wikipedia page for the USS North Carolina (BB-55), look for the second citation [45] under the Battleship Memorial secion!",
    "¯\\_(ツ)_/¯",
    "On the internet all women are men and all kids are FBI agents",
    "people who play vrchat walk around in big tiddy mommy milker avatars and then wonder why they get gender dysphoria <br>-gangstertoppen",
    "youtube.com/watch?v=iik25wqIuFo",
    "Cool it with the anti-semitic remarks.",
    "+52° 28′ 47.14″, +62° 11′ 8.38",
    "何ですか？！！！",
    "日本語が話せません",
    "Thank you Alec, very cool",
    "Maybe you should try getting a job",
    "She's moving the camera around like a crack addicted rattlesnake with attention deficit disorder <br>-TheMightyJingles"
];
//Not all escape characters work (\\ does but not \n) - if not just use html ones instead like <br>

let x = Math.floor(Math.random() * msgArray.length);

window.onload = function() {
    document.getElementById("randMessage").innerHTML = msgArray[x];
}