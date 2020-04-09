var plaatjes = [1,2,3,4,5,6,7,8,9,];
var teller = 0;
var sliderholder = document.getElementById("slideholder");
sliderholder.style.background = "url(aap1.jpg)";

sliderholder.addEventListener("click", function(){
    sliderholder.style.background = "url(aap" + getAap() + ".jpg)";
});

function getAap() {
    if(teller >= plaatjes.length){
        teller = 1;
    } else {
        teller ++;
    }
    console.log(teller);
    return teller;
}