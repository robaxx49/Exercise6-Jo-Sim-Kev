## Structure front-end

- Page d'acceuil
- Barre de navigation
- Routage front-end
    - Page d'acceuil
    - Page répertoire
        - Affichage des pièces
    - Page d'administration
        - Affichage des pièces
        - Affichage des boutons modifier/supprimer
        - Bouton ajouter
        - Formulaire d'infos (pour ajout/modification)
            - Validation

### Liste de composants

- Page acceuil
- Page répertoire
    - Composant listage - boutons
- Page administration
    - Composant listage + boutons
    - Bouton ajouter
- Page ajouter
    - Composant formulaire
    - Bouton ajouter confirmation
- Page modifier
    - Composant formulaire
    - Bouton modifier confirmation
- Composant listage
    - Paramètre pour boutons
    - Triage des pièces
    - Formattage tableau
- Composant formulaire
    - Champs titre, artiste, catégorie

## Structure Back-end

- Mise en place de la base de données
    - Création nom DB
    - Création de la collection
    - Importation du répertoire de base
- Mise en place Express
    - Fonction d'utilisation de la DB
    - Routes
        - GET pieces
            - Renvoi de toute la liste
        - GET piece selon id
            - Traitement + validation ID
            - Renvoi de l'info
        - POST ajout de pièces
            - Traitement de l'info du body
            - Validation des champs de données
            - Ajout à la base de données
        - PUT modifier pièce
            - Traitement + validation ID
            - Création du nouvel objet
            - Assignation de l'objet dans la BD
        - DELETE effacer pièce
            - Traitement + Validation ID
            - Supression de l'objet dans la BD