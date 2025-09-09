// JavaScript source code
const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});


const Benimaru_Image = document.querySelector("img");
let count = 0;
Benimaru_Image.addEventListener("click", () => {
    count += 1;
    const mysrc = Benimaru_Image.getAttribute("src");
    if (mysrc === "image/depressed emo.jpg" && count % 2 == 1) {
        Benimaru_Image.setAttribute("src", "image/goofy.jpg");
    }
    else {
        Benimaru_Image.setAttribute("src", "image/depressed emo.jpg")
    }
});

let mybutton = document.querySelector(".changeuser");
let myheading = document.querySelector("h1");

function setusername() {
    let myname = prompt("please enter ur name");
    while (!myname) {
        myname = prompt("Naughty boy. Enter your name.");
    }
    localStorage.setItem("name", myname);
    myheading.textContent = `Welcome to my website, ${myname}`;
}


if (!localStorage.getItem("name")) {
    setusername();
} else {
    const storedname = localStorage.getItem("name");
    myheading.textContent = `Welcome to my website, ${storedname}`;
}

mybutton.addEventListener("click", () => {
    setusername();






  function TimeLive() {
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

        const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

        document.getElementById('currentTime').textContent = formattedTime;
    }

    setInterval(TimeLive, 1000);

    updateTime();
});

