# Premier Exercice sur Firebase (RealTime Database)

## Créer vos objets sur votre DB manuellement

Nous allons maintenant passer à un petit exercice. Allez dans la console Firebase et dans Database, ensuite Premiers Pas dans Realtime Database.
Commencez en mode test, normalement après faut changer pour repasser en privé mais vu que ce n'est qu'un exercice laissons en test. Quand vous avez choisi "Commencer en test" cliquez sur "Activer".

Nous voici maintenant dans la base de données. Dans le menu vous avez, **Données**, **Règles**, **Sauvegarde** et **Utilisation**.

- **Données** servira a remplir manuellement notre DB, le but plus tard sera qu'elle se remplisse seule à l'aide d'un formulaire par exemple.

- **Règles** sert a changer notre règle, par exemple repasser en privé.

- **Sauvegarde** ben c'est assez facile ça sert à faire des frites ... bon ok à sauvegarder vos données.

- **Utilisation** cela vous montre ce que vous consommez, la version gratuite est limitée mais vous inquiétez pas, pour arriver à la limite faut le vouloir.


Allons dans **Données**, vous devez normalement voir votre nom de projet puis un null et un + et un x.

Cliquez sur le **+** dans nom mettez *"objet"* et rien dans valeur (sinon cela ce ne sera pas un 'dossier'), recliquez sur **+**, cette fois-ci dans nom mettez *"lastname"* (en minuscule) et dans valeur *"votre nom"* recliquez sur le + à coté d'objets et cette fois-ci mettez *"firstname"* (en minuscule) et *"votreprenom"*. Cliquez sur Ajouter quand c'est fait.

Du coup vous devriez avoir ceci :

- objet
  - firstname: "votreprenom"
  - lastname: "votrenom"

Si c'est bon rajoutez votre date de naissance (en format 00/00/00), votre ville et votre e-mail.

Vous devriez avoir ceci à la fin :

- objet
  - birthday: "08/06/88"
  - city: "Bruxelles"
  - firstname: "Cedric"
  - lastname: "Fournier"
  - mail: "cedricfournier.pro@gmail.com"


Supprimez *"objet"* en cliquant sur le **x** à coté.
Vous avez également supprimé tout ce qui se trouvait à l'interieur.

> Essayez toujours de mettre les noms en minuscule, les valeurs comme vous le souhaitez.

Maintenant recommencez en créant un dossier principal du nom de *"users"* puis deux sous-dossiers dans votre projet. Appellez le premier **votrenom** et le second **lenomduvoisin** et remplissez-les, le premier avec vos données et le second avec un de vos voisins à votre table.

Une fois que c'est fait vous devriez avoir quelque chose dans ce style là.

- users
  - cedric
    - birthday: "08/06/88"
    - city: "Bruxelles"
    - firstname: "Cedric"
    - lastname: "Fournier"
    - mail: "cedricfournier.pro@gmail.com"
  - geraldine
    - birthday: "04/04/86"
    - city: "Liège"
    - firstname: "Geraldine"
    - lastname: "Winand"
    - mail: "winand.geraldine@hotmail.com"

> Une chose importante a savoir : **cedric** est considéré comme un **"ID"**, **birthday** est une **"key"** et **"08/06/88"** est une **"value"**


## Afficher les objets de votre DB

Nous allons maintenant appeller notre DB sur notre page **index.html**. Mettez le code JavaScript dans **script.js**

Commençez par afficher vos éléments soit via `console.log()` ou directement sur votre page **index.html**.

Je vous laisse chercher avec Google comment faire.

> Aidez vous de la Documentation Firebase et de la Documentation Javascript. Pensez aux "key" et "value".

Quand vous avez réussi à afficher vos éléments de la DB, maintenant mettez-les dans une liste HTML (`<ul><li></li></ul>`). Sans oublier de mettre devant un titre, **par exemple, à la place de "firstname" avoir Prénom : Cédric**.

Une fois fait, mettez maintenant la liste dans l'ordre suivant :

    Prénom : firstname
    Nom : lastname
    Anniversaire : birthday
    Ville : city
    E-mail : mail

Comme resultat vous devriez avoir quelque chose comme ça :

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

Voila maintenant vous savez comment créer une base de donnée avec Firebase et comment l'afficher sur votre page. Maintenant comme exercice, il ne vous reste plus que :
  - Ajouter une nouvelle personne dans votre DB.
  - Update une personne déjà présente dans la DB.
  - Supprimez une personne déjà présente dans la DB.
  - Ce n'est que le début héhéhé <span style="color:red">:smiling_imp:</span>

## Table des matières

  - [Intro](../intro.md) 
  - **Realtime Database**
    - [Créer et afficher notre DB](./exercice01.md)
    - [Modifier et supprimer de la data de notre DB](./exercice02.md)