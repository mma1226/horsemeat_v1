
let discoBall = document.getElementById("discoBall");
let cursorLight = document.getElementById("lightSaber");
//column's 
let col1 = document.querySelectorAll(".firstLetter");
let col2 = document.querySelectorAll(".secondLetter");
let col3 = document.querySelectorAll(".thirdLetter");
let col4 = document.querySelectorAll(".fourthLetter");
let col5 = document.querySelectorAll(".fifthLetter");

//rows:
let row1 = document.querySelectorAll(".row1");
let row2 = document.querySelectorAll(".row2");
let row3 = document.querySelectorAll(".row3");


//cursor 
document.addEventListener("mousemove", function(e) {
    cursorLight.style.left = e.clientX + "px";
    cursorLight.style.top = e.clientY + "px";
  });

document.addEventListener("mousedown", function(e) {
    cursorLight.style.width = "74px";
    cursorLight.style.height = "74px";
    cursorLight.style.filter = "blur(22px)";
  });

document.addEventListener("mouseup", function(e) {
    cursorLight.style.width = "15px";
    cursorLight.style.height = "15px";
    cursorLight.style.filter = "blur(5.5px)";
  });



//discoBall hover 
discoBall.addEventListener("mouseover", function() {
    discoBall.src = "assets/discoball.gif";
    cursorLight.style.width = "74px";
    cursorLight.style.height = "74px";
    cursorLight.style.filter = "blur(22px)";
    cursorLight.style.background = "rgba(255, 0, 76, 0.9);"
    cursorLight.style.opacity = "50";
  });

discoBall.addEventListener("mouseleave", function(){
    discoBall.src = "assets/discoball.png";
    cursorLight.style.width = "15px";
    cursorLight.style.height = "15px";
    cursorLight.style.filter = "blur(5.5px)";
  });

//discoBall hover and click~ to scatter letters 

discoBall.addEventListener("mousedown", function(){

//col1 & col2 [move left]










  } )