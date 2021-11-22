const title = document.querySelector(".title h1");


console.dir(title);
function handleTitleClick() {
    title.style.color ="yellow";    
}
function handleMouseEnter(){
    title.innerText="mouse is here!"
}
function handleMouseLeave(){
    title.innerText ="mouse is gone!"
}
function handleWindowResize() {
    document.body.style.backgroundColor ="tomato" ;
}
function handleWindowCopy (){
    alert("copier!");
}
title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

