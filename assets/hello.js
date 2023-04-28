let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY);
  header.classList.toggle("king", window.scrollY );
});

// let hover = document.getElementsByTagName("a");
// for (let x of hover) {
//   window.addEventListener("scroll", () => {
//     x.classList.toggle("king", window.scrollY );
//   });
// } 
