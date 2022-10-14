const msgArray = ["Go to the wikipedia page for the USS North Carolina (BB-55), look for the second citation [45] under the Battleship Memorial secion!",
    "¯\\_(ツ)_/¯",
    "On the internet all women are men and all kids are FBI agents",
    "people who play vrchat walk around in big tiddy mommy milker avatars and then wonder why they get gender dysphoria",
    "<a href=\"https://youtu.be/iik25wqIuFo\" target=\"blank\">Click Here For Free Robux!</a>",
    "Cool it with the anti-semitic remarks.",
    "+52° 28′ 47.14″, +62° 11′ 8.38",
    "何ですか？！！！",
    "日本語が話せません",
    "Thank you Alec, very cool",
    "Maybe you should try getting a job",
    "She's moving the camera around like a crack addicted rattlesnake with attention deficit disorder",
    "There are over 550 million firearms in worldwide circulation. That's one firearm for every twelve people on the planet. <br>The only question is: How do we arm the other 11?",
    "Traps are not gay",
    "Welcome to the FBI watchlist",
    "and you don't seem to understand",
    "C'mon Poland, you know you wanna press the Article 5 button!",
    "The power factor of a hot dog is exactly 1",
    "Playing <b>Hearts of Iron IV</br>",
    "I've become so much like Eren Jaeger it's scary. I wear black cardigans, verbally assault women, and physically assault my friends.",
    "I have to return some video tapes.",
    "John McAfee didn't Epstein himself.",
    "No step on snek",
    "BORN TO FEEL <br>WORLD IS A SAD <br>鬼神 Everything is Pain 2008 <br>I am hopeless man <br>757,864,530 DAYS WASTED",
    "Don't trust the corn syrup",
    "If only you knew how bad things really are.",
    "He/Him She/Her Xim/Xir Latino/Latina Himm/Ler Zey/Zer They/Them ",
    "<a href=\"https://www.youtube.com/watch?v=6jloSmHhMoI\" target=\"blank\">The U.N. literally tried banning Anime 💀</a>",
    "<a href=\"https://youtu.be/5X9RUOEOoNQ\" target=\"blank\">Alex Jones Explains Neon Genesis Evangelion to Joe Rogan</a>",
    "They told me I could write anything for the message of the day",
    "We live in a society",
    "The youngest communist server in Roblox",
    "I will not live in the pod, I will not eat the bugs",
    "You're now blinking and breathing manually",
    "Don't forget to touch grass, because I'm not (as you can tell)",
    "pepsi > coke",
    "Lain Iwakura best girl",
    "Frank Amodeo: Ruler of the Terrain Empire",
    "Make Eldia Great Again",
    "#SaveTF2",
    "Ryanair pilot grindset: 'we paid for the whole suspension, we're gonna use the whole suspension'",
    "If you wanna have a harem of femboys while growing opium on your front lawn, that's up to you. <br>-Count Dankula",
    "A warm thanks to the many members of the Merchants Guild, generously funding and bankrolling those videos. You are all truly wonderful have a good one.",
    "Tresspassers will be prostituted",
    "At Lv.30, there is a 41% chance this unit eliminates itself from the game"
];
//Not all escape characters work (\\ does but not \n) - if not just use html ones instead like <br>

let lengthForIncrease = 15;
let shortRead = 5000;
let longRead = 10000;
let interval = shortRead;
let run = setInterval(request, interval);

function request() {

    let x = Math.floor(Math.random() * msgArray.length);
    let wordLength = msgArray[x].split(" ").length;

    clearInterval(run);

    interval = (wordLength > lengthForIncrease) ? longRead : shortRead;

    document.getElementById("randMessage").innerHTML = msgArray[x];

    run = setInterval(request, interval);
}

request();