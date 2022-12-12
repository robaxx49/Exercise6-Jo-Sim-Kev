import { React, useState, useEffect } from 'react';
import ListeDemandes from '../composants/ListeDemandes';

export function PageAfficherDemande()
{
    const [listeDemandes, setListeDemandes] = useState([]);

    useEffect(() => {
        const chercherDonnees = async () => {
            const resultat = await fetch(`/api/demandes`);
            const body = await resultat.json().catch((error) => {console.log(error)});
            setListeDemandes(body);
        };
        chercherDonnees();
    }, []);

    return (
        <>
            <h1>Liste des demandes spéciales</h1>
            <ListeDemandes demandes={listeDemandes} />
        </>
    )
}

export default PageAfficherDemande;