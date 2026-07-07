console.log("SCRIPT LOADED");
// ================= INTRO =================
const line1 = "Hey Handsome ❤️";
const line2 = "I've made something special just for you...";

let i = 0, j = 0;

function typeLine1() {
    if (i < line1.length) {
        document.getElementById("line1").innerHTML += line1[i++];
        setTimeout(typeLine1, 80);
    } else {
        setTimeout(typeLine2, 500);
    }
}

function typeLine2() {
    if (j < line2.length) {
        document.getElementById("line2").innerHTML += line2[j++];
        setTimeout(typeLine2, 45);
    }
}

window.onload = () => setTimeout(typeLine1, 1000);

// ================= ELEMENTS =================
const content = document.querySelector(".content");
const callScreen = document.getElementById("callScreen");
const kissScene = document.getElementById("kissScene");
const blowPage = document.getElementById("blowPage");
const agePage = document.getElementById("agePage");
const birthdayPage = document.getElementById("birthdayPage");
const lovePage = document.getElementById("lovePage");
const finalPage = document.getElementById("finalPage");
const lastClipPage = document.getElementById("lastClipPage");

const callMsg = document.getElementById("callMsg");
const callNotification = document.getElementById("callNotification");
const declineBtn = document.getElementById("declineBtn");
const acceptBtn = document.getElementById("acceptBtn");

const kissBtn = document.getElementById("kissBtn");
const playBlowBtn = document.getElementById("playBlowBtn");
const blowVideo = document.getElementById("blowVideo");
const birthdayMusic = document.querySelector("#birthdayMusic");
const finalBtn = document.getElementById("finalBtn");
const lastVideo = document.getElementById("lastVideo");
// ================= KEYPAD =================

const keys = document.querySelectorAll(".key");
const passInput = document.getElementById("passcode");


keys.forEach(key=>{

    key.onclick=function(){

        passInput.value += this.innerText;

    }

});
// ================= START =================
// ================= START GAME =================

document.getElementById("startBtn").onclick = async function(){

    console.log("START CLICKED ❤️");


    const music = document.getElementById("birthdayMusic");


    if(music){

        try{

            music.volume = 1;

            music.currentTime = 0;

            await music.play();

            console.log("MUSIC PLAYING ❤️");


        }
        catch(error){

            console.log("MUSIC ERROR:", error);

        }

    }
    else{

        console.log("AUDIO NOT FOUND");

    }



    // SHOW NOTIFICATION FIRST

    const notification = document.getElementById("callNotification");


    if(notification){

        notification.classList.add("showNotification");


        setTimeout(()=>{

            notification.classList.remove("showNotification");


            content.style.display="none";

            callScreen.style.display="flex";


        },1000);


    }

    else{


        // directly open call screen

        content.style.display="none";

        callScreen.style.display="flex";


    }


};
// ================= DECLINE LOGIC =================
let warning = 0;

function moveDeclineButton() {
    const area = document.querySelector(".buttons");

    const maxX = area.clientWidth - declineBtn.offsetWidth;
    const maxY = area.clientHeight - declineBtn.offsetHeight;

    declineBtn.style.left = Math.random() * maxX + "px";
    declineBtn.style.top = Math.random() * maxY + "px";
}

declineBtn.addEventListener("mouseenter", handleDecline);
declineBtn.addEventListener("click", handleDecline);

function handleDecline() {
    if (warning < 2) {
        warning++;
        callMsg.innerHTML = warning === 1
            ? "🥺 Are you really going to decline me?"
            : "❤️ Please Accept!";
        setTimeout(() => callMsg.innerHTML = "Calling...", 800);
    } else {
        moveDeclineButton();
    }
}

// ================= ACCEPT =================
acceptBtn.onclick = () => {
    callScreen.classList.add("fadeOut");

    setTimeout(() => {
        callScreen.style.display = "none";
        kissScene.style.display = "flex";
        kissScene.classList.add("fadeIn");
    }, 700);
};

// ================= KISS =================
kissBtn.onclick = () => {
    kissEffect();

    setTimeout(() => {
        kissScene.style.display = "none";
        blowPage.style.display = "flex";
        blowPage.classList.add("fadeIn");
    }, 1000);
};

function kissEffect() {
    const area = document.getElementById("kissAnimation");
    if (!area) return;

    area.innerHTML = "";

    for (let i = 0; i < 18; i++) {
        const kiss = document.createElement("div");
        kiss.className = "flyKiss";
        kiss.innerHTML = "💋";
        kiss.style.left = Math.random() * 90 + "%";
        kiss.style.setProperty("--move", (Math.random() * 300 - 150) + "px");
        area.appendChild(kiss);
    }
}

// ================= BLOW =================
playBlowBtn.onclick = () => {
    playBlowBtn.style.display = "none";
    blowVideo.play();
};

blowVideo.onended = () => {
    blowPage.style.display = "none";
    showAge();
};

// ================= AGE =================
function showAge() {
    agePage.style.display = "flex";

    document.getElementById("ageNextBtn").onclick = function () {
        agePage.style.display = "none";
        showBirthday();
    };
}

// ================= BIRTHDAY =================
function showBirthday() {
    agePage.style.display = "none";
    birthdayPage.style.display = "flex";
    revealPhotos();
}
function revealPhotos() {
    const cards = document.querySelectorAll(".photoCard");

    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add("showPhoto");
        }, i * 800);
    });
}

// ================= HUG =================
const hugBtn = document.getElementById("hugBtn");

hugBtn.onclick = () => {
    birthdayPage.style.display = "none";
    lovePage.style.display = "flex";
    createLoveHearts();
};
// ================= QUOTE =================
const quote = "The adventure continues... ❤️";

function typeQuote() {
    const el = document.getElementById("typingQuote");
    let idx = 0;

    el.innerHTML = "";

    function typing() {
        if (idx < quote.length) {
            el.innerHTML += quote[idx++];
            setTimeout(typing, 80);
        }
    }
    typing();
}

// ================= FINAL VIDEO =================
lastVideo.onended = () => {
    lastClipPage.style.display = "none";
    finalPage.style.display = "flex";
};

// ================= CONFETTI =================
function createConfetti() {
    const container = document.getElementById("confetti");
    container.innerHTML = "";

    for (let i = 0; i < 100; i++) {
        const c = document.createElement("div");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "vw";
        c.style.animationDuration = (Math.random() * 3 + 2) + "s";
        container.appendChild(c);
    }
}

// ================= BALLOONS =================
function createBalloons() {
    const container = document.getElementById("balloons");
    container.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        const b = document.createElement("div");
        b.className = "balloon";
        b.style.left = Math.random() * 100 + "vw";
        container.appendChild(b);
    }
}

function createLoveHearts(){

    const area = document.getElementById("heartRain");

    area.innerHTML = "";

    for(let i = 0; i < 60; i++){

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDelay = Math.random() * 2 + "s";

        area.appendChild(heart);
    }
}

// ================= HAPPY INPUT =================

const happyInput = document.getElementById("happyInput");
const loveNextBtn = document.getElementById("loveNextBtn");


function startLoveVideo(){

    let text = happyInput.value.trim().toLowerCase();


    if(text === "happy"){


        lovePage.style.display = "none";


        finalPage.style.display = "flex";


        let music = document.getElementById("birthdayMusic");


        music.pause();

        music.currentTime = 0;


        music.play()
        .then(() => {

            console.log("Birthday song started");

        })
        .catch((error)=>{

            console.log("Music error:",error);

        });


    }
    else{

        alert("Type 'happy' ❤️");

    }

}



loveNextBtn.onclick = function(){

    startLoveVideo();

};



happyInput.addEventListener("keypress",function(e){

    if(e.key === "Enter"){

        startLoveVideo();

    }

});



// ================= BYE BUTTON =================

document.getElementById("byeBtn").onclick=function(){

    birthdayMusic.pause();

    birthdayMusic.currentTime=0;

    finalPage.style.display="none";

    endPage.style.display="flex";

    document.getElementById("endVideo").play();

};
document.getElementById("closeBtn").onclick = function(){

    // Try to close the tab
    window.close();

    // If the browser blocks it, show a goodbye screen
    document.body.innerHTML = `
        <div style="
            width:100vw;
            height:100vh;
            background:black;
            color:white;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:45px;
            font-family:Georgia,serif;
        ">
            ❤️HBD ❤️
        </div>
    `;

};