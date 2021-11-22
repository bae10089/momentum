const title = document.querySelector(".title h1");

console.dir(title);
function handleMouseEnter() {
  title.innerText = "mouse is here!";
}
function handleTitleClick() {
  if(title.style.color ==="blue"){
      title.style.color = "tomato"
  }
  else{
      title.style.color = "blue"
  }
}
function handleMouseLeave() {
  title.innerText = "mouse is gone!";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffLine() {
  alert("SOS no WIFI");
}
function handleWinodwOnline() {
  alert("good");
}
title.onclick = handleTitleClick;

title.onmouseenter = handleMouseEnter;
title.onmouseleave = handleMouseLeave;
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffLine);
window.addEventListener("online", handleWinodwOnline);
{
  (" ");
}
