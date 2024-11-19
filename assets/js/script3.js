var i=0;
var images=[];
var time=2000;
images[0] = 'assets/images/APP-01_1512x.jpg'
images[1] = 'assets/images/APP-02_1512x.jpg'
images[2] = 'assets/images/APP-03_1512x.jpg'
images[3] = 'assets/images/APP-04_1512x.jpg'
images[4] = 'assets/images/APP-05_1512x.jpg'
images[5] = 'assets/images/APP-06_1512x.jpg'
function changeImg(){
    document.slide.src= images[i];
    if(i < images.length - 1){
     i++;
    }else{
        i-0;
    }
    setTimeout("changeImg()",time);
    window.onload - changeImg;
}
changeImg();
const pause=document.getElementById("pause");
pause.addEventListener("click",function(){
    if(images[i]){
    }
})
