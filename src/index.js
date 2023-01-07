import { waitForElementToBeRemoved } from '@testing-library/dom';
import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!
const box= document.querySelector("div");
// 1-load

window.addEventListener("load", (event) => {
    setTimeout((t)=> {box.style.display = "none"},4000)
  });
// 2-click

  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("click",(blurImg) =>{
       blurImg.target.style.filter = "blur(15px)";
    })
  });
 // 3- dblclick

  images.forEach((img) => {
    img.addEventListener("dblclick",(blurImg) =>{
       blurImg.target.style.filter = "unset";
    })
  });
// 4,5- mouseover, mouseout

  const bGround = document.querySelector("header");
 bGround.addEventListener("mouseover",mouseOver);
 bGround.addEventListener("mouseout",mouseOut);
 function mouseOver() {
    bGround.style.backgroundColor = "red";
  }
  function mouseOut() {
    bGround.style.backgroundColor = "white";
  }

  const bGr = document.querySelector("footer");
 bGr.addEventListener("mouseover",mouOver);
 bGr.addEventListener("mouseout",mouOut);
 function mouOver() {
    bGr.style.backgroundColor = "red";
    bGr.style.color = "white";
  }
  function mouOut() {
    bGr.style.backgroundColor = "white";
  }
  // 4,5 -mouseover, mouseout
  const  textP = document.querySelector(".footer p");
  
  textP.addEventListener("mouseover",mOver);
  textP.addEventListener("mouseout",mOut);
  function mOver() {
    textP.style.color = "white";
    textP.innerHTML = "Kaçırma :)"
  }
  
  function mOut() {
    textP.style.color = "black";
    textP.innerHTML = "Copyright Eğlence Otobüsü 2022"
  }
// 6- keydown
const a = document.querySelector("body");
a.addEventListener("keydown", kDown);
const cumleler = ["Yavaş bas kıracaksın.", "Ne hızlı okudun anladığından emin misin?", "Ahh şimdi şu adalardan birinde olacaktım var ya...", "Aslında bırakcaksın işi gücü... Neyse ya boşver."];
function kDown(){
let i = Math.floor(Math.random()*cumleler.length)
alert(cumleler[i]); 
}
// 7, 8-mousedown
const sect = document.querySelector(".text-content h2");
sect.addEventListener("mousedown", mDown)
function mDown(){
    sect.innerHTML = "Kardeşim burada buton mu var neden basıyorsun.";
}
sect.addEventListener("mouseup", mUp)
function mUp(){
    sect.innerHTML = "Haydi Gidelim!";
}
// 7, 8-mousedown
const altBaslık = document.querySelector("h2");
altBaslık.addEventListener("mousedown", mouseDown)
function mouseDown(){
    altBaslık.innerHTML = "Kardeşim burada buton mu var neden basıyorsun.";
}
altBaslık.addEventListener("mouseup", mouseUp);
function mouseUp(){
    altBaslık.innerHTML = "Eğlence Otobüsüne Hoş geldiniz!";
}
// 9- resize
window.addEventListener("resize",boyut);
let x=0;
function boyut() {
  var txt = x += 1;
  document.getElementById("demo").innerHTML = txt;
}

// 10- select 
let metin = document.querySelector(".destination");
metin.addEventListener("select",secilen);
function secilen(){
  alert("Al sayfa senin olsun al");
}