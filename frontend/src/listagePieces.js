import { React, useState, useEffect } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";

export function ListagePieces({ isAdmin }) {
    let boutonModifier = null;
    let boutonEffacer = null;

    if (isAdmin) {
        boutonModifier = <Button>Modifier</Button>;
        boutonEffacer = <Button>Effacer</Button>;
    }

    //fetch data from backend MongoDB and store it in listePieces
    const [listePieces, setListePieces] = useState([]);

    useEffect(() => {
        async function fetchPieces() {
            const results = await fetch('/api/pieces');
            setListePieces(await results.json());
        }
        fetchPieces();
    }, []);

    if (listePieces) {
        return (
            <>
                <Row>
                    <Col>
                        <Table bordered striped>
                            <thead>
                                <tr>
                                    <th>Titre</th>
                                    <th>Artiste</th>
                                    <th>Catégorie</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {listePieces.map(u =>
                                    <tr key={u._id}>
                                        <td>{u.titre}</td>
                                        <td>{u.artiste}</td>
                                        <td>{u.categorie}</td>
                                        <td>{boutonModifier}</td>
                                        <td>{boutonEffacer}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        )
    }
    else {
        return (
            <Row>
                <Col>
                    <Table bordered striped>
                        <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Artiste</th>
                                <th>Catégorie</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Chargement...</td>
                                <td>Chargement...</td>
                                <td>Chargement...</td>
                                <td>Chargement...</td>
                                <td>Chargement...</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        )
    }
}

export default ListagePieces;