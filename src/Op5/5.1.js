pics = document.getElementById("pics");
createPicsHolders();
createDierImages();

function createPicsHolders() {
    for (var i = 0; i < 9; i++) {
        picsHolders = document.createElement("div");
        picsHolders.className = "picture-holder";
        picsHolders.id = "picture-holder" + i;
        pics.appendChild(picsHolders);
    }
}
//picsHolders maken

function createDierImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        dierPlaatje = document.createElement("img");
        dierPlaatje.src = "img/dier" + (i+1) + ".jpg";
        dierPlaatje.id = (i+1);
        dierPlaatje.addEventListener("click", function () {
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(dierPlaatje);
    }
}

function maakFavoriet(id) {
    console.log("Maak mij favoriet! Het gaat om dier..." + id );
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }
    favoriet =  document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('img/hart.png')";
}