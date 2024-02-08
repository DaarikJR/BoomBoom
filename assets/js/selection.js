// utilisation d'une API à partir d'un menu contextuel
var search = document.getElementById("search");
var result = document.getElementById("result");
var titres = document.getElementById("titres");
var titreArray = [];
function addTitre(title) {
    if (titreArray.length < 5) {
        console.log(title);
        titreArray.push(title);
        result.innerHTML = "";
        search.value = "";
        titres.innerHTML = "";
        titreArray.forEach((value) => {
            titres.innerHTML += "<div>" + value + "</div>";
        })
    }

}
search.addEventListener("input", () => {
    result.innerHTML = "";
    if (search.value.length > 3) {

        fetch(`https://musicbrainz.org/ws/2/recording/?query=${search.value}&fmt=json&limit=20`)
            .then(res => res.json())
            .then(json => {
                // boucle foreach
                json.recordings.forEach(element => {
                    result.innerHTML += `<div class="select"
                     onclick="addTitre('${element.title}-${element['artist-credit'][0].name}')">
                    Titre : ${element.title} - 
                    Artiste : ${element['artist-credit'][0].name}
                    </div>`
                });



            })


    }
})
var registerEnd = document.forms["registerEnd"]
document.querySelector(".placeholder").addEventListener("click", (event) => {
    event.preventDefault();
    registerEnd.titre1.value = titreArray[0];
    registerEnd.titre2.value = titreArray[1];
    registerEnd.titre3.value = titreArray[2];
    registerEnd.titre4.value = titreArray[3];
    registerEnd.titre5.value = titreArray[4];
    registerEnd.submit();
})