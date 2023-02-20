let secound = 00;
let tens = 00;
let Interval;

const start = document.querySelector(".start")
const paus = document.querySelector(".pause")
const reseet = document.querySelector(".reset")
const Seconds = document.getElementById("sekunde")
const Ten = document.getElementById("tens")


start.addEventListener("click" , starts)
paus.addEventListener("click" , pauses)
reseet.addEventListener("click" , reset)



function starts(){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 9.7);
}

function pauses(){
    clearInterval(Interval);
}

function reset(){
    clearInterval(Interval);
    tens = "00";
    secound = "00";
    Ten.innerHTML = tens;
  	Seconds.innerHTML = secound;
    console.log("reset")
}



function startTimer () {
    tens++; 
    
    if(tens <= 9){
      Ten.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      Ten.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      secound++;
      Seconds.innerHTML = "0" + secound;
      tens = 0;
      Ten.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      Seconds.innerHTML = secound;
    }
  
  }
  