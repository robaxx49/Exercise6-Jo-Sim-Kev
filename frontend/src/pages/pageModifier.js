import React from 'react';
import FormulairePiece from '../FormulairePiece.js';
import { Button } from 'react-bootstrap';

export const PageModifier = ({ pieceAModifier }) => {
    return (
        <>
            <FormulairePiece pieceAModifier={pieceAModifier} />
            <Button>Modifier</Button>
        </>
    )
}