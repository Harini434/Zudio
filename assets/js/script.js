// clik zudio near you

document.addEventListener("DOMContentLoaded", function () {
    const near = document.getElementById("near");
        near.addEventListener("click", function (event) {
            event.preventDefault();
            location.replace('Zudio/near.html')
        });
});
function display(){
    const arr=document.getElementsByClassName('store1')
    const array=arr;
    for(array=0;array<=10;array++){
        document.write('array')
    }
}
display()

