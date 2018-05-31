# Firebase


## Par où commencer ?

Avant de commencer voici les liens important !

- https://firebase.google.com/
- https://console.firebase.google.com/
- https://firebase.google.com/docs/


- Le premier est le lien de base de Firebase, ou vous aurez acces a tout.

- Le seconde est la console pour gérer votre (ou vos) base(s) de données.

- La troisieme est la documentation qui vous servira quand vous serez bloqué ou que vous comprendrez pas quelque chose.

**Ah oui tout est en anglais !**


## Commençons par créer notre base de données !

Allez sur le lien de la console Firebase, vous aurez peut etre a vous connectez avec google, ensuite vous arriverez sur une page.

Cliquez sur le " + Ajouter un projet " , un pop-up va s'ouvrir avec plusieurs données à remplir, nommez le par exemple prenom-nom, choissisez votre pays. Je vous laisse choisir si vous voulez laisser le premier checkbox coché ou non, ensuite coché le second pour accepter leurs conditions et valider la création du projet.

Vous voici sur votre projet.


## Comprenons ce que nous voyons

Nous voici sur l'accueil en quelque sorte, plus précisément sur Project Overview. Ici vous avez accès à trois boutons, les deux premiers laissez les de coté, c'est pour pouvoir rajouter Firebase a iOS et Android mais cela demande de remplir certain condition bien précise. Nous allons plus particulièrement nous intéresser au dernier bouton qui est pour App Web.

En cliquant dessus cela ouvre un pop-up, vous devez copier ceci sur votre page index.html *(par exemple)* de préférence dans le head. Cela permet en faite de les lier.

Exemple :

    <script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>
    <script>
      // Initialize Firebase
      var config = {
      apiKey: "YOU-API-KEY",
      authDomain: "YOU-AUTH-DOMAIN",
      databaseURL: "YOU-DATABASE-URL",
      projectId: "YOU-PROJECT-ID",
      storageBucket: "YOU-STORAGE-BUCKET",
      messagingSenderId: "YOU-MESSAGING-SENDER-ID"
      };
      firebase.initializeApp(config);
    </script>

Vous devez mettre ca entre vos balises `<head> </head>`, pensez bien à utiliser le votre, celui ci n'est qu'un exemple.

Voila nous venons de jumeler notre Firebase avec notre html(ou php, ou que sais je encore).


## Continuons à configurer Firebase

Allez maintenant sur ce lien que vous utiliserez souvant : https://firebase.google.com/docs/

Comme vous pouvez le voir, Firebase peut etre utilisé sur plusieurs plateformes.

Il existe plusieurs "modules" dont Cloud Messaging, Authentication, Realtime Database, Cloud Firestore (in Beta), Storage, Hosting, Cloud Functions (in Beta) et ML Kit (in Beta). Si vous voulez en savoir plus sur un module bien précis, je vous invite à lire la Documentation.

Nous nous attarderons sur Realtime Database. Pour cela cliquez sur Realtime Database dans la Documentation.

Nous allons maintenant lier le module à notre projet. Je vous laisse lire si vous le souhaitez Introduction, Choose a Database(ca vous parlera des deux DB de Firebase). Apres cela allez dans Web et Get Started. Vous verrez a un moment  `var database = firebase.database();` s'est le code que vous aurez besoin pour lier le module a votre projet. Mettez le en dessous de `firebase.initializeApp(config);` que vous avez mis plus tôt.

Du coup vous devriez avoir ceci :

    <script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>
    <script>
      // Initialize Firebase
      var config = {
      apiKey: "YOU-API-KEY",
      authDomain: "YOU-AUTH-DOMAIN",
      databaseURL: "YOU-DATABASE-URL",
      projectId: "YOU-PROJECT-ID",
      storageBucket: "YOU-STORAGE-BUCKET",
      messagingSenderId: "YOU-MESSAGING-SENDER-ID"
      };
      firebase.initializeApp(config);

      var database = firebase.database();
    </script>

Je vous laisse chercher si vous voulez lier un autre module, ce n'est pas compliqué.


## Petit exercice

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


## Suite exercice

Nous allons maintenant appeller notre DB sur notre page index.html.
