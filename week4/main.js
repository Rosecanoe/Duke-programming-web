// upload

var myimg = null; //check if uploaded
var uploadimg = document.getElementById("finput"); //get uploaded image
var mycan = document.getElementById("can"); //get the canvas

function upload(){    
    myimg = new SimpleImage(uploadimg);
    myimg.drawTo(mycan);
}

function checkupload(){
    if (myimg == null || ! myimg.complete()){
        alert ("The image is not loaded");
        return;
    }
}


//change color

function makeGray(){
    checkupload();

    let grayimg = new SimpleImage(myimg);

    for (var pixel of grayimg.values()){
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        pixel.setRed(avg);pixel.setGreen(avg);pixel.setBlue(avg); 
    }

    grayimg.drawTo(mycan);
}

function makeRed(){
    checkupload();

    let redimg = new SimpleImage(myimg);

    for (var pixel of redimg.values()){
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        if (avg < 128){
            pixel.setRed(2*avg);pixel.setGreen(0);pixel.setBlue(0);
        }else{
            pixel.setRed(255);pixel.setGreen(2*avg-255);pixel.setBlue(2*avg-255);
        }
    }

    redimg.drawTo(mycan);
}

function resetImage(){
    checkupload();

    myimg.drawTo(mycan);
}
