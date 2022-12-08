## Section 1 - Multiples catégories

### BD

- Changement structure des catégories
- "Catégories" : [cat1, cat2, etc]

### Backend

- Ajustement du post pour recevoir le tableau de catégories correctement

### Frontend

- Repertoire
    - Affichage de la liste de chaque catégorie

## Section 2 - Demandes spéciales

### BD

Ajout d'une nouvelle collection pour les demandes spéciales.

Structure de l'objet:

```
{
    "nomClient" : <nom du Client>,
    "pieces" : 
        [
            "stringPiece1",
            "stringPiece2",
            etc.
        ]
}
```

### Backend

Trois nouvelles routes pour la nouvelle collection:

- GET /api/demandes
    - Retourne toutes les demandes spéciales
- GET /api/demandes/:id
    - Retourne la demande spéciale spécifique
- POST /api/demandes/ajouter
    - Ajoute la liste de demande envoyée en body

### Frontend

- Répertoire
    - Lien vers page ajout de demandes
        - Composant listage des pièces
            - Ajout d'un bouton ajouter
            - On click: convertit la pièce, valide
        - Composant pièces ajoutée
            - Affiche la liste des pièces sélectionnées pour la demande
- Admin
    - Lien vers page de consultation de demandes
        - Composant listage des demandes
            - Nom du client
            - Bouton déroulement