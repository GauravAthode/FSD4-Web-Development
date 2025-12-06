document.getElementById("c1").addEventListener("mouseenter",()=>{
  fillColorur("violet");
})
document.getElementById("c1").addEventListener("mouseleave",()=>{
  fillColorur("white");
})
function fillColorur(color){
  console.log(color);
  document.getElementById("rainbowbulb").style.backgroundColor = color;
}

document.getElementById("c2").addEventListener("mouseenter",()=>{
  fillColorur("indigo");
})
document.getElementById("c2").addEventListener("mouseleave",()=>{
  fillColorur("white");
})

document.getElementById("c3").addEventListener("mouseenter",()=>{
  fillColorur("blue");
})
document.getElementById("c3").addEventListener("mouseleave",()=>{
  fillColorur("white");
})

document.getElementById("c4").addEventListener("mouseenter",()=>{
  fillColorur("green");
})
document.getElementById("c4").addEventListener("mouseleave",()=>{
  fillColorur("white");
})

document.getElementById("c5").addEventListener("mouseenter",()=>{
  fillColorur("yellow");
})
document.getElementById("c5").addEventListener("mouseleave",()=>{
  fillColorur("white");
})

document.getElementById("c6").addEventListener("mouseenter",()=>{
  fillColorur("orange");
})
document.getElementById("c6").addEventListener("mouseleave",()=>{
  fillColorur("white");
})

document.getElementById("c7").addEventListener("mouseenter",()=>{
  fillColorur("red");
})
document.getElementById("c7").addEventListener("mouseleave",()=>{
  fillColorur("white");
})

