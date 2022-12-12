import React from 'react';
import Alert from 'react-bootstrap/Alert'

import { PiecesDansCategorie } from './PiecesDansCategorie.js';

export const ListePieces = ({ pieces, estAdmin, pourDemandes, ajouterDemande }) => {
    if (pieces?.length) {
        var dictionnaireCategories = Object();

        pieces.forEach(piece => {
            piece.categorie.forEach(categorie => {
                if (dictionnaireCategories[categorie] === undefined)
                {
                    dictionnaireCategories[categorie] = true;
                }
            });
        });

        const categories = Object.keys(dictionnaireCategories);

        return (
            <>
                {categories.map((categorie) => {
                    const piecesAssociees = pieces.filter((piece) => piece.categorie === categorie);
                    return <PiecesDansCategorie
                        categorie={categorie}
                        pieces={piecesAssociees}
                        estAdmin={estAdmin}
                        pourDemandes={pourDemandes}
                        ajouterDemande={ajouterDemande}
                    />
                })}
            </>
        );
    }
    else {
        return <Alert variant={"info"} >Il n'y a pas de pièces dans le répertoire.</Alert>;
    }
}

export default ListePieces;