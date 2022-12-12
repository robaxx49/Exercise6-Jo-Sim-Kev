import { React, useState, useEffect } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';


import { ListePieces } from '../composants/ListePieces';
import ContenuDemande from '../composants/ContenuDemande';

export const PageCreerDemande = () => {
    const [listePieces, setListePieces] = useState([]);
    const [nomClient, setNomClient] = useState("");

    const [nomEstPresent, setNomEstPresent] = useState(true);
    const [listeExiste, setListeExiste] = useState(true);

    const listeDemandes = [];

    useEffect(() => {
        const chercherDonnees = async () => {
            const resultat = await fetch(`/api/pieces`);
            const body = await resultat.json().catch((error) => { console.log(error) });
            setListePieces(body);
        };
        chercherDonnees();
    }, []);

    const ajouterDemande = (titre, artiste) => {
        let string = `${titre} - ${artiste}`;
        if (listeDemandes.includes(string))
        {
            alert("Cette pièce est déjà inclue dans la liste!")
        }
        else 
        {
            listeDemandes.push(`${titre} - ${artiste}`);
            console.log(listeDemandes);
        }
    }

    const validerFormulaire = () => {
        setNomEstPresent(nomClient !== "");
        setListeExiste(listeDemandes.length > 0);

        if (nomClient !== "" && listeDemandes.length > 0) {
            envoyerFormulaire();
        }
    }

    const envoyerFormulaire = async () => {
        await fetch(`/api/demandes/ajouter`, {
            method: 'post',
            body: JSON.stringify({ nomClient, listeDemandes }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };

    return (
        <>
            <h1>Créer une nouuvelle liste de demandes spéciales</h1>

            <Form>
                <Form.Group>
                    <Form.Label htmlFor="inputClient">Nom du client
                        {nomEstPresent === false ?
                            <span className="text-danger"> * Vous devez entrer un nom.</span>
                            : undefined
                        }</Form.Label>
                    <Form.Control type="text" value={nomClient} id="inputClient"
                        onChange={(event) => setNomClient(event.target.value)} />
                </Form.Group>
            </Form>

            <Row>
                <Col>
                    <ListePieces pieces={listePieces} pourDemandes={true} ajouterDemande={ajouterDemande} />
                </Col>
                <Col>
                    {listeExiste === false ?
                        <span className='text-danger'> * Il n'y a pas de pièces dans la liste.</span>
                        : undefined
                    }
                    <ContenuDemande demande={listeDemandes} />
                </Col>
            </Row>

            <Button className="mt-2" variant="primary" onClick={validerFormulaire}>Créer la demande</Button>
        </>
    )
}

export default PageCreerDemande;