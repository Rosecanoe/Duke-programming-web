var paintcanvas = document.getElementById("canvas1"); //得到canvas元素
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// only paint if mouse is being dragged (moved while the button is pressed)
var isPainting = false;

function setWidth(value) { //使用该函数调整canvas的大小
    if (isNumeric(value)){ 
        var currWidth = parseInt(value);    
        paintcanvas.width = currWidth; 
    }
    return paintcanvas;       
}

function setHeight(value) { 
    if (isNumeric(value)){ //判断输入是否是有效字符串,这个是不太完整的，后续还需要考虑判断字符串是否是纯数字
        var currHeight = parseInt(value);    
        paintcanvas.height = currHeight; 
    }
    return paintcanvas;         
}


function clearCanvas () {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

// verify the given value is actually a number
function isNumeric (value) {
    // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
    return !isNaN(value);
}

// START PAINTING
function startPaint(){
    isPainting = true;
    return isPainting;
}

function endPaint(){
    isPainting = false;
    return isPainting;
}

function doPaint(x,y){
    if (isPainting){ //注意判断值
        paintCircle(x,y);
    }
    //paintCircle(x,y);
}

function changeColor(newColor){
    color = newColor; 
    return color;
}

// CHANGE BRUSH CHARACTER
function resizeBrush(newSize){
    radius = newSize;
    document.getElementById("sizeOutput").value = newSize; 

}
