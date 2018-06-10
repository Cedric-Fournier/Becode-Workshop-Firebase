# Premier Exercice sur Firebase

## Créer vos objets sur votre DB manuellement

Nous allons maintenant passer à un petit exercice. Allez dans la console Firebase et dans Database, ensuite Premiers Pas dans Realtime Database.
Commencez en mode test, normalement après faut changer pour repasser en privé mais vu que ce n'est qu'un exercice laissons en test. Quand vous avez choisi "Commencer en test" cliquez sur "Activer".

Nous voici maintenant dans la base de données. Dans le menu vous avez, **Données**, **Règles**, **Sauvegarde** et **Utilisation**.

- **Données** servira a remplir manuellement notre DB, le but plus tard sera qu'elle se remplisse seul a l'aide d'un formulaire par exemple.

- **Règles** sert a changer notre règle, par exemple repasser en privé.

- **Sauvegarde** ben c'est assez facile ça sert à faire des frites ... bon ok à sauvegarder vos données.

- **Utilisation** cela vous montre ce que vous consommez, la version gratuite est limitée mais vous inquiétez pas, pour arriver à la limite faut le vouloir.


Allons dans **Données**, vous devez normalement voir votre nom de projet puis un null et un + et un x.

Cliquez sur le + dans nom mettez "objets" et rien dans valeur (sinon cela ce ne sera pas un dossier) recliquez sur +. Cette fois si dans nom mettez "lastname" (en minuscule) et valeur "votre nom" recliquez sur le + a coté d'objets et cette fois ci mettez "firstname" (en minuscule) et votre prénom. Cliquez sur Ajouter quand c'est fait.

Du coup vous devriez avoir ceci :

- objets
  - firstname: "nomvotre"
  - lastname: "votreprenom"

Si c'est bon rajouter votre date de naissance (en format 00/00/00), votre ville et votre e-mail.

Vous devriez avoir ceci a la fin :

- objets
  - birthday: "dateDeNaissance"
  - city: "votreVille"
  - firstname: "votreNom"
  - lastname: "votrePrenom"
  - mail: "votreMail"


Supprimez "objets" en cliquant sur le x a coté.
Vous avez également supprimez tout ce qui se trouvait a l'interieur.

> Essayez toujours de mettre les noms en minuscule, les valeurs comme vous le souhaitez.

Maintenant recommencez en créant deux sous dossier dans votre projet. Appellez le premier **moi** et le second **voisin** et remplissez les, le premier avec vos données et le second avec un de vos voisins à votre table.

Une fois que s'est fait nous allons maintenant appeller tout sa sur notre page index.html.


## Afficher vos objets de votre DB

Nous allons maintenant appeller notre DB sur notre page index.html.

Commençez par afficher vos éléments soit via `console.log()` ou directement sur votre page **index.html**.

Je vous laisse chercher avec la Documentation et Google comment faire.

Quand vous avez reussis à afficher vos éléments de la DB, maintenant mettez les dans une liste HTML (`<ul><li></li></ul>`). Sans oubliez de mettre devant un titre, **par exemple, a la place de firstname avoir Prénom : Cédric**.

Une fois fait, mettez maintenant la liste dans l'ordre suivant :

    Prénom : firstname
    Nom : lastname
    Anniversaire : birthday
    Ville : city
    E-mail : mail

Comme resultat vous devriez avoir quelque chose comme sa :

    Prénom : Cedric
    Nom : Fournier
    Anniversaire : 08/06/88
    Ville : Bruxelles
    E-mail : cedricfournier.pro@gmail.com

    Prénom : Geraldine
    Nom : Winand
    Anniversaire : 04/04/86
    Ville : Liège
    E-mail : winand.geraldine@hotmail.com


<!-- Caché ou pas ?

      <script>  
        var rootRef = firebase.database().ref();
        rootRef.once("value")
        .then((snapshot) => {
          snapshot.forEach((item) => {
            let data = item.val();

            let nodeUser = document.createElement("LI");
            let nodeUserUL = document.createElement("UL");

            // Object.getOwnPropertyNames renvoit la liste des key sous forme de tableau
            Object.getOwnPropertyNames(data).forEach((property) => {
              let propertyValue = document.createTextNode(keyLang[property] + " : " + data[property]);
              let nodeUserLI = document.createElement("LI");
              nodeUserLI.appendChild(propertyValue);
              nodeUserUL.appendChild(nodeUserLI);
            });

            nodeUser.appendChild(nodeUserUL);
            document.getElementById("myList").appendChild(nodeUser);
          });
        });
      </script>
-->

Voila maintenant vous savez comment créer une base de donnée avec Firebase et comment l'afficher sur votre page. Maintenant comme exercice, il ne vous reste plus que :
  - Ajouter une nouvelle personne dans votre DB via index.html.
  - Update une personne déjà présente dans la DB via index.html.
