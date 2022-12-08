import React from "react";
import { Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";



export function FormulairePiece({ pieceAModifier }) {
    const [titre, setTitre] = useState("");
    const [artiste, setArtiste] = useState("");
    const [categorie, setCategorie] = useState("");

    if (pieceAModifier !== undefined) {
        setTitre(pieceAModifier.titre);
        setArtiste(pieceAModifier.artiste);
        setCategorie(pieceAModifier.categorie);
    }

    return (
        <Row>
            <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="formTitre">
                        <Form.Label>Titre :</Form.Label>
                        <Form.Control
                            type="text"
                            value={titre}
                            onChange={e => setTitre(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formArtiste">
                        <Form.Label>Artiste :</Form.Label>
                        <Form.Control
                            type="text"
                            value={artiste}
                            onChange={e => setArtiste(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCategorie">
                        <Form.Label>Catégorie :</Form.Label>
                        <Form.Control
                            type="text"
                            value={categorie}
                            onChange={e => setCategorie(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    )
}

export default FormulairePiece;