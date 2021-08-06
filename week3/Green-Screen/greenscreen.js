var foreimg = backimg = null;
var leftimage = document.getElementById("can1"); //get the left canvas
var rightimage = document.getElementById("can2");

//Upload
function loadForegroundImage(){
    var foreground = document.getElementById("foreground");
    foreimg = new SimpleImage(foreground);
    foreimg.drawTo(leftimage);
}

function loadBackgroundImage(){
    var background = document.getElementById("background");
    backimg = new SimpleImage(background);
    backimg.drawTo(rightimage);
}

//Image Size
function cansize() {
    if (backimg.width > foreimg.width){
        backimg.width = foreimg.width;
         
    }else{
        foreimg.width = backimg.width;  
    }
    if (backimg.height > foreimg.height){
        backimg.height = foreimg.height;
    }else{
        foreimg.height = backimg.height;
    }
    clearCanvas();
    foreimg.drawTo(leftimage);
    var rightimage = document.getElementById("can2");
    backimg.drawTo(rightimage); 
}

//Clear Canvas
function clearCanvas() {
    var leftcontext = leftimage.getContext("2d");
    leftcontext.clearRect(0, 0, leftimage.width, leftimage.height);
    var rightcontext = rightimage.getContext("2d");
    rightcontext.clearRect(0, 0, rightimage.width, rightimage.height);
}

//Green Screen Algorithm
function doGreenScreen(){
    if (foreimg == null || ! foreimg.complete()){
        alert ("foreground not loaded");
        return;
    }
    if (backimg == null || ! backimg.complete()){
        alert ("background not loaded");
        return;
    }
    cansize();
    clearCanvas();
    
    var output = new SimpleImage (foreimg.getWidth(),foreimg.getHeight());
    for (var pixel of foreimg.values()){
        var x = pixel.getX();
        var y = pixel.getY();
        if (pixel.getGreen() > 240){
            var bgPixel = backimg.getPixel(x,y);
            output.setPixel(x,y,bgPixel);
        }else{
            output.setPixel(x,y,pixel);
        }
    }
    output.drawTo(rightimage);
}
