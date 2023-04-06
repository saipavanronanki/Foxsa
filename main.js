function myFunction1() {
    window.open("https://web.whatsapp.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}

function myFunction2() {
    window.open("https://web.telegram.org/z/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}



function videocall() {
    let video = document.getElementById("iframe_a");
    let x = Math.random().toString(36).substring(2, 7);
    let y = "https://videolify.up.railway.app/join/22726ShinyBeaver".concat(x);

    video.src = y;
    video.target


}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

function myFunction3() {
    window.open("", "iframe_a", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}

function bigImg(x) {
    x.src = "https://res.cloudinary.com/dz1dgaf8z/image/upload/v1679728533/speech-bubble_n4q7x9.gif";
}

function normalImg(x) {
    x.src = "https://res.cloudinary.com/dz1dgaf8z/image/upload/v1674329921/man-ga5965e282_1920_bfbwlj.jpg";
}

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("darkmode").className = "bi bi-toggle2-on";
}





/*----------------------   end     -------------------------------------------------------*/


const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light mode";
    } else {
        modeText.innerText = "Dark mode";

    }
});
























