const mouseElement = document.createElement("div");
const mouseCursor = document.querySelector(".mouseCursor");

document.body.append(mouseElement);
mouseElement.classList.add("mouseCursor");
// mouseElement.classList.add("view");

document.addEventListener("mousemove", (e) => { 
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    mouseElement.style.left = mouseX + "px";
    mouseElement.style.top = mouseY + "px";
});
