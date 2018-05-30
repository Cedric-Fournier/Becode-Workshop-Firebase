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
