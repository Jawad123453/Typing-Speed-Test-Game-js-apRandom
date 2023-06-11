let comingwords=document.querySelector(".comingwords");
let btn=document.querySelector(".btn");
let maininput=document.getElementById("maininput");
maininput.onpaste=function(){
  return false;
}
let timeleft=document.querySelector(".timeleft span");
let Scorespan1=document.querySelector(".Score span:nth-child(1)");
let Scorespan2=document.querySelector(".Score span:nth-child(2)");
let whicklvlspan1=document.querySelector(".whicklvl span:nth-child(1)")
let whicklvlspan2=document.querySelector(".whicklvl span:nth-child(2)");
let rusalt=document.querySelector(".rusalt");

const lvls={
  "easy":6,
  "Normal":4,
  "Hard":2
}
let defortletvlname="Hard";
let thelvl=lvls[defortletvlname];

let maintimer;
let duration=thelvl;
timeleft.innerHTML=duration;

whicklvlspan1.innerHTML=defortletvlname;
whicklvlspan2.innerHTML=thelvl;

let alfaindex=0;
let mewarraynumber=[];
let mainarray=[
  "hello",
  "jawad",
  "idk",
  "phcal",
  "poasd",
  "kdqd",
  "adwqd",
  "masdo",
  "dqweq",
  "pqwoad"
]
let arraynumber=Array.from(mainarray.keys());

Scorespan1.innerHTML=alfaindex;
Scorespan2.innerHTML=mainarray.length;

btn.addEventListener("click",function(){
  putincom();
  mainworld()
  maininput.focus();
  btn.remove();
  timetoswitchc();
  maininput.addEventListener("keyup",function(){
    checkiftrue(maininput.value);
  })
})

function givealfaindexran(){
  let arraylen = arraynumber.length;
  let temp,random;
  while(arraylen > 0){
    random = Math.floor(Math.random() * arraylen);
    arraylen--;

    temp = arraynumber[arraylen];
    arraynumber[arraylen] = arraynumber[random];
    arraynumber[random] = temp;
  }
  return arraynumber;
}
givealfaindexran()

function mainworld(){
  let div=document.createElement("div");
  div.classList.add("theword");
  let divword=document.createTextNode(mainarray[arraynumber[alfaindex]]);
  div.appendChild(divword);
  document.querySelector(".thewordplace").appendChild(div);
}

function putincom(){
  for(let i=0;i<mainarray.length;i++){
    let span=document.createElement("span");
    let spantext=document.createTextNode(mainarray[i]);
    span.appendChild(spantext);
    comingwords.appendChild(span);
  }
  document.querySelector(".comingwords p").remove();
  comingwords.style.padding="10px 20px";
}

function timetoswitchc(){
  if(alfaindex == 0){
    duration = thelvl + 2;
  }else{
    duration = thelvl;
  }
  let sec=duration;
  timeleft.innerHTML=sec;

  maintimer = setInterval(() => {
    if(sec == 0){
      clearInterval(maintimer);
      rusalt.classList.add("lose");
      rusalt.innerHTML="Game Over";
      maininput.remove();
    }else{
      sec--;
      timeleft.innerHTML=sec;
    }
  }, 1000);
}

function checkiftrue(mainvalue){
  if((mainvalue) == mainarray[arraynumber[alfaindex]]){
    alfaindex++;
    Scorespan1.innerHTML=alfaindex;
    document.querySelector(".thewordplace").innerHTML="";
    mainworld()
    maininput.value="";
    clearInterval(maintimer);
    timetoswitchc()
  }

  if(alfaindex == mainarray.length){
    rusalt.classList.add("win");
    rusalt.innerHTML="You Did It";
    maininput.remove();
    document.querySelector(".thewordplace").innerHTML="";
    document.querySelector(".timeleftandscore").remove();
  }
}