
var oogplaatjes = [1,2,3];
var neusplaatjes = [4,5,6];
var mondplaatjes = [7,8,9];
var teller = 0;
var slideholder1 = document.getElementById("slideholder1");
slideholder1.style.backgroundImage = "url(img/ogen3.jpg)";

slideholder1.addEventListener("click", function () {
    slideholder1.style.backgroundImage = "url(img/ogen" + getEyes() + ".jpg)";
});

// Functie ogen //

function getEyes() {
    if(teller >= oogplaatjes.length){
        teller = 1;
    } else {
        teller++;
    }
    return teller;
}

var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.backgroundImage = "url(img/neus3.jpg)";

slideholder2.addEventListener("click", function () {
    slideholder2.style.backgroundImage = "url(img/neus" + getNose() + ".jpg";
});

// Functie neus//

function getNose() {
    if(teller >= neusplaatjes.length){
        teller = 1;
    } else {
        teller++;
    }
    return teller;
}

var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.backgroundImage = "url(img/mond3.jpg)";

slideholder3.addEventListener("click", function () {
    slideholder3.style.backgroundImage = "url(img/mond" + getMouth() + ".jpg";
});

// Functie mond //

function getMouth() {
    if(teller >= mondplaatjes.length){
        teller = 1;
    } else {
        teller++;
    }
    return teller;
}