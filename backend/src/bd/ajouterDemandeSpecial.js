import { utiliserDB } from './connection';

export function ajouterPiece(requete, reponse) {
    const {nom, pieces} = requete.body;

    if (validerParametres(nom, pieces) === true) {
        utiliserDB(async (db) => {
            await db.collection('demande-special').insertOne({nom, pieces});
            
            reponse.status(200).send("Demande ajoutée");
        }, reponse).catch(
            () => reponse.status(500).send("Erreur : la demande n'a pas été ajoutée")
        );        
    }
    else {
        reponse.status(500).send(`Certains paramètres ne sont pas définis :
            - nom: ${nom}
            - artiste: ${pieces}`);
    }
}

function validerParametres(nom, pieces) {
    let resultat = false;

    if (nom !== undefined && pieces !== undefined 
        && nom !== "" && pieces !== "" ) {
        resultat = true;
    }
    return resultat;
}
