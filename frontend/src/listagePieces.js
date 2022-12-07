import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export function listagePieces({ listePieces, isAdmin }) {
    let boutonAdmin = null;

    if (isAdmin) {
        boutonAdmin = <Button>Modifier</Button>;
    }

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
                        {listePieces.map(u =>
                            <tr>
                                <td>{u.titre}</td>
                                <td>{u.artiste}</td>
                                <td>{u.categorie}</td>
                                <td>{boutonAdmin}</td>
                            </tr>
                        )};
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default listagePieces;