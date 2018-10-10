// Initialize Firebase
const config = {
    apiKey: "AIzaSyBkPhd-YTN9yYrtQZnZd6CcEjql-xN8zNk",
    authDomain: "cedric-fournier-workshop.firebaseapp.com",
    databaseURL: "https://cedric-fournier-workshop.firebaseio.com",
    projectId: "cedric-fournier-workshop",
    storageBucket: "cedric-fournier-workshop.appspot.com",
    messagingSenderId: "799853077004"
};

firebase.initializeApp(config);

const database = firebase.database();

// Je crée les noms en FR de mon Objet
const keyLang = {
    birthday: "Anniversaire",
    city: "Ville",
    firstname: "Prénom",
    lastname: "Nom",
    mail: "E-mail"
};

function reloadData(snapshot) {
    document.getElementById("myList").innerHTML = "";
    snapshot.forEach((item) => {
        const data = item.val();

        let newData = {
            firstname: data.firstname,
            lastname: data.lastname,
            birthday: data.birthday,
            city: data.city,
            mail: data.mail
        }

        let nodeUser = document.createElement("LI");
        let nodeUserUL = document.createElement("UL");

        for (let i in newData) {
            let propertyValue = document.createTextNode(keyLang[i] + " : " + newData[i]);
            let nodeUserLI = document.createElement("LI");
            nodeUserLI.appendChild(propertyValue);
            nodeUserUL.appendChild(nodeUserLI);
        }

        nodeUser.appendChild(nodeUserUL);
        document.getElementById("myList").appendChild(nodeUser);
    });
}

// Afficher mes objets
const rootRef = database.ref("users/");
rootRef.on("value", function (snapshot) {
    reloadData(snapshot);
});

// Add un objet & modif
function writeData(form) {
    database.ref('users/' + form.userId.value).set({
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        birthday: form.birthday.value,
        city: form.city.value,
        mail: form.mail.value
    });
}

// Delete un objet
function deleteData(form) {
    database.ref('users/' + form.userId.value).remove()
        .then(function () {
            console.log("Remove succeeded.")
        })
        .catch(function (error) {
            console.log("Remove failed: " + error.message)
        });
}


















