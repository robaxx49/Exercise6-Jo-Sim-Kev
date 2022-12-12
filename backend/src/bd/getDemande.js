import { utiliserDB } from './connection';

export const getDemande = (requete, reponse) => {   

    utiliserDB(async (db) => {
        
        const infoDemandes = await db.collection('demande-special').find().ToArray();
        
        reponse.status(200).json(infoDemandes);      
    }, reponse).catch(
        () => reponse.status(500).send("Aucune demande special en memoire")
    );
};