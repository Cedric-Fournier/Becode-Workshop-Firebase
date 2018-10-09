# Firebase   

## Par où commencer ?

Avant de commencer voici les liens importants !

- [Google Firebase](https://firebase.google.com/)
- [Console Firebase](https://console.firebase.google.com/)
- [Documentation Firebase](https://firebase.google.com/docs/)

> CTRL + clique pour l'ouvrir dans un nouvelle onglet

La console permet de gérer votre (ou vos) base(s) de données.

La documentation vous servira quand vous serez bloqué ou que vous comprendrez pas quelque chose.

**Tout est en anglais !**


## Commençons par créer notre base de données !

Allez sur le lien de la console Firebase, vous aurez peut-être à vous connecter avec Google, ensuite vous arriverez sur une page.

Cliquez sur le " + Ajouter un projet " , un pop-up va s'ouvrir avec plusieurs données à remplir, nommez le par exemple prenom-nom-workshop, choisissez votre pays (Zone des données analytiques) et laissez Zone Cloud Firestore sur us-central, on utilisera Firestore un peu plus loin. Ensuite cochez les deux checkbox pour accepter leurs conditions et valider la création du projet.

Vous voici sur votre projet.


## Comprenons ce que nous voyons

Nous voici sur l'accueil en quelque sorte, plus précisément sur Project Overview. Ici vous avez accès à trois boutons, les deux premiers laissez les de coté, c'est pour pouvoir rajouter Firebase a iOS et Android mais cela demande de remplir certaines conditions bien précises. Nous allons plus particulièrement nous intéresser au dernier bouton qui est pour App Web.

En cliquant dessus cela ouvre un pop-up, vous devez copier ceci sur votre page index.html *(par exemple)* de préférence dans le head. Cela permet en fait de les lier.

Exemple :

```html
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>
<script>
// Initialize Firebase
const config = {
  apiKey: "YOU-API-KEY",
  authDomain: "YOU-AUTH-DOMAIN",
  databaseURL: "YOU-DATABASE-URL",
  projectId: "YOU-PROJECT-ID",
  storageBucket: "YOU-STORAGE-BUCKET",
  messagingSenderId: "YOU-MESSAGING-SENDER-ID"
};
firebase.initializeApp(config);
</script>
```

Vous devez mettre ça entre vos balises `<head> </head>`, pensez bien à utiliser le votre, celui-ci n'est qu'un exemple.

Voila nous venons de jumeler notre Firebase avec notre html(ou php, ou que sais je encore).

#### Petit plus 
Pour nos exercices, nous allons mettre cela dans un fichier **script.js**. Je vous laisse faire. Pensez du coup a installer firebase avec **npm install --save firebase** (**sudo** si besoin pour Linux et Mac)


## Continuons à configurer Firebase

Allez maintenant sur ce lien que vous utiliserez souvant : <a href="https://firebase.google.com/docs/" target="_blank">Documentation Firebase</a>

Comme vous pouvez le voir, Firebase peut etre utilisé sur plusieurs plateformes.

Il existe plusieurs "modules" dont Cloud Messaging, Authentication, Realtime Database, Cloud Firestore (in Beta), Storage, Hosting, Cloud Functions (in Beta) et ML Kit (in Beta). Si vous voulez en savoir plus sur un module bien précis, je vous invite à lire la Documentation même si on va déjà en voir plusieurs durant ce workshop.

Nous nous attarderons sur Realtime Database. Pour cela cliquez sur Realtime Database dans la Documentation.

Nous allons maintenant lier le module à notre projet. Je vous laisse lire si vous le souhaitez Introduction, Choose a Database(ca vous parlera des deux DB de Firebase). Apres cela allez dans Web et Get Started. Vous verrez a un moment  `const database = firebase.database();` c'est le code dont vous aurez besoin pour lier le module à votre projet. Mettez-le en dessous de `firebase.initializeApp(config);` que vous avez mis plus tôt.

Du coup vous devriez avoir ceci :

> script.js

```javascript
      // Initialize Firebase
      const config = {
      apiKey: "YOU-API-KEY",
      authDomain: "YOU-AUTH-DOMAIN",
      databaseURL: "YOU-DATABASE-URL",
      projectId: "YOU-PROJECT-ID",
      storageBucket: "YOU-STORAGE-BUCKET",
      messagingSenderId: "YOU-MESSAGING-SENDER-ID"
      };
      firebase.initializeApp(config);

      const database = firebase.database();
```

## Petit plus !

J'ai utilisé du SCSS, si vous ne vous rappellez pas de comment cela fonctionne, voici un lien : <a href="https://sass-lang.com/" target="_blank">SASS</a>

## Table des matières

  - [Intro](intro.md) 
  - **Realtime Database**
    - [Créer et afficher notre DB](./1_Realtime_Database/exercice01.md) 
