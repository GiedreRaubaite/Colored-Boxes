 document.getElementById("box1").addEventListener("click", myFunction);
   function myFunction() {
  document.getElementById("box1").style.WebkitAnimation = "mymove 4s 2"; // Code for Chrome, Safari, and Opera
  document.getElementById("box1").style.animation = "mymove 4s 2";
}