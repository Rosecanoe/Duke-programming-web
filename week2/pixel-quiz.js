//environment: duke learn to program website

//function1
function phrase3words(value1, value2, value3) {
    var answer = value1 + " " + value2 + " " + value3 ;  
    return answer;
}

var result1 = phrase3words("smile","at","everyone");
print(result1);
var result2 = phrase3words("everyone","wave", "back");
print(result2);
var result3 = phrase3words("coding","is", "fun");
print(result3);

//funtion2
function reformatName(first, last) {
   var name = last + "," + first;
   return name;
}

var result = reformatName("Susan", "Rodger");
print(result);
result = reformatName("Robert", "Duvall");
print(result);

//function3
function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight(); 
    var width = someImg.getWidth();
    var totalPixels = height*width;
    return totalPixels;
}

var result = numberPixels("chapel.png");
print(result);
result = numberPixels("dinos.png");
print(result);

//function4
function perimeter(imageName) {
    var someImg = new SimpleImage(imageName);
    var height = someImg.getHeight(); 
    var width = someImg.getWidth();
    var periPixels = (height*2)+(width*2);
    return periPixels;
}

print(perimeter("rodger.png"));

//function5
function printPixel(nameImage, xpos, ypos) {
    var someImg = new SimpleImage(nameImage); //得到图片
    var pixel1 = someImg.getRed(xpos,ypos);
    var pixel2 = someImg.getGreen(xpos,ypos);
    var pixel3 = someImg.getBlue(xpos,ypos);
    print("red is: " + pixel1);
    print("green is :" + pixel2);
    print("blue is:" + pixel3);
}

printPixel("drewgreen.png",10, 10);
printPixel("drewgreen.png",250, 500);

//function6
function sumPixel(nameOfImage, xpos, ypos) {
    var someImg = new SimpleImage(nameOfImage);
    var pixel1 = someImg.getRed(xpos,ypos);
    var pixel2 = someImg.getGreen(xpos,ypos);
    var pixel3 = someImg.getBlue(xpos,ypos);
    var addpixel = pixel1+pixel2+pixel3;
    return addpixel;
};

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png",10, 10);
print(answer);
