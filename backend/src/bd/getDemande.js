import { utiliserDB } from './connection';

export const getDemande = (requete, reponse) => {
    

    utiliserDB(async (db) => {
        try{
            
        const infoDemandes = await db.collection('demande-special').find().toArray();
        
        reponse.status(200).json(infoDemandes); 
        
        }
        catch(erreur){
            reponse.status(500).send("Aucune demande special en memoire");
        }  
          
    }, reponse)
};