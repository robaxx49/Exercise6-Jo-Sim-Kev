import { ObjectId } from 'mongodb';

import { utiliserDB } from './connection';

export const getDemandeParID = (requete, reponse) => {
    const id = requete.params.id;

    utiliserDB(async (db) => {
        var objectId = ObjectId.createFromHexString(id);

        const infoDemande = await db.collection('demande-special').findOne({ _id: objectId });
        
        reponse.status(200).json(infoDemande);      
    }, reponse).catch(
        () => reponse.status(500).send("Demande non trouvée")
    );
};