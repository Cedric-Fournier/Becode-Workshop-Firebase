# Deuxième Exercice sur Firebase (RealTime Database)

## Ajouter une troisième personne dans votre DB

Ajoutez une autre personne de votre table avec les mêmes info **MAIS** cette fois en utilisant votre page *index.html*, vous ne devez pas le faire manuellement (exemple : avec un formulaire html).


> A nouveau aidez vous de la Documentation Firebase, ainsi que celle de javascript.

Oubliez pas que vous devez également ajouter un ID, mettez comme pour les autres, le prénom de la personne choisi (en minuscule naturellement). Ah et cela doit s'afficher automatiquement avec ceux qu'on a déjà.

Vous devriez avoir ceci *(avec les infos que vous avez pris)* :

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

    Prénom : Antoni
    Nom : Dalle Nogare
    Anniversaire : 04/02/90
    Ville : Namur
    E-mail : antoni.dallenogare@gmail.com

Du coup normalement quand vous avez mis les données dans le formulaire HTML, il devrait s'afficher automatiquement sans actualisé la page. Si non, vous y etes presque mais ce n'est pas encore ça.

## Ajouter une quatrième personne

Faites comme au dessus.

## Modifier la quatrième personne

Maintenant vous devez upgrader la dernière personne ajoutée.

Soit vous le faites avec le même formulaire, soit vous en créez un autre juste pour "Upgrade".

Avant Upgrade :

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

    Prénom : Antoni
    Nom : Dalle Nogare
    Anniversaire : 04/02/90
    Ville : Namur
    E-mail : antoni.dallenogare@gmail.com

    *Prénom : Alex*
    Nom : Infanti
    *Anniversaire : 10/12/1990*
    *Ville : Bruxelles*
    E-mail : infanti.alexandre@gmail.com


Après  Upgrade :

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

    Prénom : Antoni
    Nom : Dalle Nogare
    Anniversaire : 04/02/90
    Ville : Namur
    E-mail : antoni.dallenogare@gmail.com

    *Prénom : Alexandre*
    Nom : Infanti
    *Anniversaire : 10/12/90*
    *Ville : Ixelles*
    E-mail : infanti.alexandre@gmail.com

> J'ai mis les changements entre ** pour que vous les voyez plus facilement.


Voila maintenant vous savez comme modifier un objet.

## Supprimer un objet.

Maintenant vous devez supprimer une des personnes. Moi par exemple, je choisis la dernière ajouté.

> Aidez vous de la Documentation Firebase, ainsi que celle de javascript.

Vous devriez n'avoir plus que trois objets(personnes). Pour ma part voici ce que j'ai.

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

    Prénom : Antoni
    Nom : Dalle Nogare
    Anniversaire : 04/02/90
    Ville : Namur
    E-mail : antoni.dallenogare@gmail.com



## Table des matières

  - [Intro](intro.md) 
  - **Realtime Database**
    - [Créer et afficher notre DB](./Realtime_Database/exercice01.md)
    - [Modifier et supprimer de la data de notre DB](./Realtime_Database/exercice02.md)
  - **Authentification**
    - [Premier Exercice](./Authentification/exercice01.md)
