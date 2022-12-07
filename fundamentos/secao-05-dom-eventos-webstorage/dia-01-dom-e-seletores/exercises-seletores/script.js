document.querySelector("#header-container").style.backgroundColor = "rgb(17, 182, 91)";
document.querySelector("#footer-container").style.backgroundColor = "rgb(34, 104, 86)";
document.querySelector(".emergency-tasks").style.backgroundColor = "pink";
document.querySelector(".no-emergency-tasks").style.backgroundColor = "yellow";

const black = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < black.length; index += 1) {
    black[index].style.backgroundColor = "black";
};

const purple = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < purple.length; index += 1) {
    purple[index].style.backgroundColor = "purple";
};