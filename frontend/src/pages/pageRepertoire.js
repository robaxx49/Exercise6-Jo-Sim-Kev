import {
    React,
    useState,
    useEffect
} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ListePieces } from '../composants/ListePieces.js';

export const PageRepertoire = () => {
    const [listePieces, setListePieces] = useState([]);

    useEffect(() => {
        const chercherDonnees = async () => {
            const resultat = await fetch(`/api/pieces`);
            const body = await resultat.json().catch((error) => {console.log(error)});
            setListePieces(body);
        };
        chercherDonnees();
    }, []);

    return (
        <>
            <h1>Liste du répertoire</h1>
            <ListePieces pieces={listePieces} />
            <Link to="/creerDemande">
                <Button>Ajouter une nouvelle pièce</Button>    
            </Link>
        </>
    );
}