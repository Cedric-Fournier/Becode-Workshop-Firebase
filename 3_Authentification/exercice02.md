# Deuxième Exercice sur Firebase (Authentification)

## Authentification avec Google

## Authentification avec Facebook

#### Préparation
Tout comme pour Email et Mot de passe, nous devons aller l'activer mais pas que <span style="color:blue">:smile:</span>.

#### Developers Facebook
Allez sur <a href="https://developers.facebook.com/" target="_blank">Developers Facebook</a> puis connectez vous avec votre compte Facebook, si vous en avez pas, créer en un vite fait. On peut aussi utiliser un compte Facebook pour autre chose que raconter sa vie sur le reseau social. Genre pour nous developper.

Allez maintenant dans "Mes applications"("My Apps" in English), puis "Ajouter une application" ("Add a New App"), il ne vous reste plus qu'a donner un nom a votre App (exemple "prénom-nom-workshop").

Nous avons besoin de "Facebook Login", passez la souris dessus et sélectionnez "Configurer", puis sélectionnez "Web" comme plate-forme souhaitée. Ensuite, donnez-lui l'URL du site (genre avec le localhost, faudra juste tous mettre dans votre Lamp(Linux), Wamp, etc ...) et cliquez sur "Enregistrer", puis sur "Paramètres", sous "Connexion Facebook" (menu de gauche).

![URI de redirection OAuth](../assets/facebooklogin.png "URI de redirection OAuth")

> PS : C'est le machin encadrer en noir. Copier le vôtre, également. :grin:

Copier le lien dans le input de "URI de redirection OAuth valides" puis enregistrer.

Ensuite aller dans le "Tableau de bord", copier l'ID de l’APP et mettez le dans "App ID" de Firebase, maintenant il nous reste a trouver "App Secret". Vous allez dans "Paramètres" sur **Developers Facebook**, puis "Général". 
La "Clé secrète" se trouve en haut à droite, cliquez sur afficher, il va vous demander votre mot de passe, puis vous n'avez plus qu'a copier et la coller au bonne endroit dans Firebase. Enregistrer et c'est terminé pour la configuration.

![Firebase Actived Facebook](../assets/firebase-after-actived-FB.png "Firebase activation de Facebook")




## Authentification avec GitHub


## Table des matières

  - [Intro](../intro.md) 
  - **Realtime Database**
    - [Créer et afficher notre DB](../1_Realtime_Database/exercice01.md)_
    - [Modifier et supprimer de la data de notre DB](../1_Realtime_Database/exercice02.md)
  - **Storage**
    - [Utiliser le composant Storage](../2_Storage/exercice01.md)
  - **Authentification**
    - [Authentification avec Email & Password](./3_Authentification/exercice01.md)
    - [Authentification avec Google, Facebook et GitHub](./3_Authentification/exercice01.md)
  - **Cloud Firestore**
    - Exercice 01
