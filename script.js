
let discoBall = document.getElementById("discoBall");
let cursorLight = document.getElementById("lightSaber");
let allLetterDivs = document.querySelectorAll(".lilbox");
let prideInfo = document.getElementById("pride");
let colors = ['#F2E44D', '#489F57', '#D03631', '#D77BA8','#D8683B','#4AA5E5','#9367B5','#BA322B','#F0E54D','#489F57']
// let bluelTextli = document.getElementById("blueText");
let addyInfo = document.getElementById("addy");
let letter1 = document.getElementById("letter1");
let letter2 = document.getElementById("letter2");
let letter3 = document.getElementById("letter3");
let letter4 = document.getElementById("letter4");
let letter5 = document.getElementById("letter5");
let letter6 = document.getElementById("letter6");
let letter7 = document.getElementById("letter7");
let letter8 = document.getElementById("letter8");
let letter9 = document.getElementById("letter9");
let letter10 = document.getElementById("letter10");
let letter11 = document.getElementById("letter11");
let letter12 = document.getElementById("letter12");
let letter13 = document.getElementById("letter13");

var intervalId;
let backgroundColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff'];
let currentIndex = 0;

document.body.style.backgroundColor = "#000000";

//lightsOn
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
    cursorLight.style.width = "3vw";
    cursorLight.style.height = "3vw";
    cursorLight.style.filter = "blur(22px)";
  });



//discoBall hover 
discoBall.addEventListener("mouseover", function(e) {


    discoBall.src = "assets/discoball.gif";
    cursorLight.style.width = "15vw";
    cursorLight.style.height = "15vw";
    cursorLight.style.filter = "blur(22px)";
    // cursorLight.style.background = "rgba(255, 0, 76, 0.9)";
    letter1.style.transform = "translate(-28vw, -21vh) rotate(-28.13deg)";
    letter1.style.color = "#F2E44D";
  
    letter2.style.transform = "translate(-15vw, -21vh) rotate(113.62deg)";
    letter2.style.color = "#489F57";
  
    letter3.style.transform = "translate(-5vw, -21vh) rotate(-103.98deg)";
    letter3.style.color = "#D03631";
  
    letter4.style.transform = "translate(10vw, -21vh) rotate(74.26deg)";
    letter4.style.color = "#D77BA8";
  
    letter5.style.transform = "translate(30vw, -25vh) rotate(-121.48deg)";
    letter5.style.color = "#F2E44D";
  
    letter6.style.transform = "translate(-29vw, 20vh) rotate(-78.05deg)";
    letter6.style.color = "#D8683B";
  
    letter7.style.transform = "translate(-23vw, -13vh) rotate(-155.04deg)";
    letter7.style.color = "#4AA5E5";
  
    letter8.style.transform = "translate(33vw, -27vh) rotate(58.74deg)";
    letter8.style.color = "#4AA5E5";
    
    letter9.style.transform = "translate(37vw, -14vh) rotate(-20.41deg)";
    letter9.style.color = "#9367B5";
    
    letter10.style.transform = "translate(-24vw, -17vh) rotate(-20.41deg)";
    letter10.style.color = "#D77BA8";

    letter11.style.transform = "translate(-26vw, 24vh) rotate(-20.41deg)";
    letter11.style.color = "#BA322B";

    letter12.style.transform = "translate(-10vw, 20vh) rotate(74.26deg)";
    letter12.style.color = "#F0E54D";

    letter13.style.transform = "translate(30vw, 18vh) rotate(58.74deg)";
    letter13.style.color = "#489F57";

    //info pop up
    prideInfo.style.opacity = "1";
  
    //lights on
    if(intervalId){
        clearInterval(intervalId);
    }
    intervalId = setInterval(changeBackgroundColor, 300);

    
  });


discoBall.addEventListener("mouseout", function(){
    discoBall.src = "assets/discoball.png";
    cursorLight.style.width = "3vw";
    cursorLight.style.height = "3vw";
    cursorLight.style.filter = "blur(22px)";

    // IMPORTANT

    letter1.style.transform = "translate(0) rotate(0)";
    letter1.style.color = "#F2E44D";
  
    letter2.style.transform = "translate(0) rotate(0)";
    letter2.style.color = "#489F57";
  
    letter3.style.transform = "translate(0) rotate(0)";
    letter3.style.color = "#D03631";
  
    letter4.style.transform ="translate(0) rotate(0)";
    letter4.style.color = "#D77BA8";
  
    letter5.style.transform ="translate(0) rotate(0)";
    letter5.style.color = "#F2E44D";
  
    letter6.style.transform = "translate(0) rotate(0)";
    letter6.style.color = "#D8683B";
  
    letter7.style.transform = "translate(0) rotate(0)";
    letter7.style.color = "#4AA5E5";
  
    letter8.style.transform ="translate(0) rotate(0)";
    letter8.style.color = "#4AA5E5";
    
    letter9.style.transform = "translate(0) rotate(0)";
    letter9.style.color = "#9367B5";
    
    letter10.style.transform = "translate(0) rotate(0)";
    letter10.style.color = "#D77BA8";

    letter11.style.transform = "translate(0) rotate(0)";
    letter11.style.color = "#BA322B";

    letter12.style.transform = "translate(0) rotate(0)";
    letter12.style.color = "#F0E54D";

    letter13.style.transform = "translate(0) rotate(0)";
    letter13.style.color = "#489F57";

    //info disappear 

    prideInfo.style.opacity = "0";

    changeTextColor();


    // lightsOff
    clearInterval(intervalId);
    document.body.style.backgroundColor = "#000000";

  });

//discoBall hover and click~ to scatter letters 

//NEED TO LOOP 
//hover on letters
for (let letterDiv of allLetterDivs ){


letterDiv.addEventListener("mouseover", function(){
  cursorLight.style.width = "15vw";
  cursorLight.style.height = "15vw";
  // cursorLight.style.background ="#870000";
  // cursorLight.style.mixBlendMode = "exclusion";

})

letterDiv.addEventListener("mouseleave", function(){
  discoBall.src = "assets/discoball.png";
    cursorLight.style.width ="3vw";
    cursorLight.style.height = "3vw";
    cursorLight.style.filter = "blur(22px)";

}) }

document.body.style.backgroundColor = "#000000";

function changeTextColor() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  for (letter of allLetterDivs){
    letter.style.color = randomColor;
  }
}



function changeBackgroundColor(){
  document.body.style.backgroundColor = backgroundColors[currentIndex];
  currentIndex = (currentIndex + 1) % backgroundColors.length;
}
