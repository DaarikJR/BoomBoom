var formContent = {};

document.forms["etape1"].addEventListener("submit", (event) => {
    event.preventDefault();
    console.dir(document.forms["etape1"]);
    // je recupere ici le contenu du champs email
    formContent.email = document.forms["etape1"]["email"].value;
    // je recupere ici le contenu du champs password
    formContent.password = document.forms["etape1"]["password"].value;
    // je peux maintenant cacher ce formulaire etape1
    // et afficher le formulaire etape2
    document.forms["etape1"].style.display = "none";
    document.forms["etape2"].style.display = "block";
})
document.forms["etape2"].addEventListener("submit", (event) => {
    event.preventDefault();

    formContent.nom = document.forms["etape2"]["nom"].value;
    formContent.prenom = document.forms["etape2"]["prenom"].value;
    formContent.age = document.forms["etape2"]["age"].value;
    formContent.sexe = document.forms["etape2"]["sexe"].value;

    document.forms["etape2"].style.display = "none";
    document.forms["etape3"].style.display = "block";
})
document.forms["etape3"].addEventListener("submit", (event) => {
    event.preventDefault();

    formContent.telephone = document.forms["etape3"]["telephone"].value;
    formContent.adresse = document.forms["etape3"]["adresse"].value;

    document.forms["etape3"].style.display = "none";
    document.forms["etape4"].style.display = "block";
    console.dir(formContent);
})
document.forms["etape4"].addEventListener("submit", (event) => {
    event.preventDefault();

    formContent.profil = document.forms["etape4"]["profil"].value;
    console.dir(document.forms["etape4"]);
    // les boucles
    var tags = [];
    var taille = document.forms["etape4"].length;
    console.dir(taille);
    
    for (let index = 1; index < taille - 1; index++) {
        if (document.forms["etape4"][index].checked === true) {
            console.dir(document.forms["etape4"][index].name);
            tags.push(document.forms["etape4"][index].name);

        }

    }
    
    document.forms["etape4"]["email"].value = formContent.email;
    document.forms["etape4"]["password"].value = formContent.password;
    document.forms["etape4"]["nom"].value = formContent.nom;
    document.forms["etape4"]["prenom"].value = formContent.prenom;
    document.forms["etape4"]["age"].value = formContent.age;
    document.forms["etape4"]["sexe"].value = formContent.sexe;
    document.forms["etape4"]["telephone"].value = formContent.telephone;
    document.forms["etape4"]["adresse"].value = formContent.adresse;
    
    document.forms["etape4"]["tags"].value = tags;

    formContent.tags = tags;

    //utilisation du localstorage
    localStorage.setItem("user", formContent);
    document.forms["etape4"].submit();

})
