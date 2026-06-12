// const question = document.querySelector(".question");
// const answer = document.querySelector(".answer");

// question.addEventListener("click", () => {
//      if(question.textContent=== "+"){
//         question.textContent = "✖️"
//     }else{
//         question.textContent = "+"
//     }
//   if (answer.style.display === "none") {
//     answer.style.display = "block";
//   } else {
//     answer.style.display = "none";
//   }
 
// });

// const hambarger = document.querySelector(".hambarger");
// const menu = document.querySelector(".menu");

// hambarger.addEventListener("click", () => {
//   menu.classList.toggle("show");

//   if (hambarger.textContent === "☰") {
//     hambarger.textContent = "✖";
//   } else {
//     hambarger.textContent = "☰";
//   }
// });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  hamburger.textContent =
    hamburger.textContent === "☰" ? "✖" : "☰";
});