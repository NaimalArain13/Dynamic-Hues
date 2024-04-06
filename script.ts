function getRandomHexColor() {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color;
}


console.log(getRandomHexColor())
function updateContentColor(){
    console.log('updateContentColor function called');
    
    const content = document.getElementById("content");
    if (content){
    const randomColor = getRandomHexColor()
    content.style.color = randomColor;
}else { 
    console.log("Element with ID 'content' not found");
}
}
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded event fired");
    setInterval(updateContentColor, 1000);   
});

