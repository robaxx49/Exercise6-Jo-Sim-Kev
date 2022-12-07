import React from 'react';
import formulairePieces from '../formulairePiece';
import { Button } from 'react-bootstrap';

export const PageModifier = ({pieceAModifier}) =>{
    return(
        <>
            <formulairePieces pieceAModifier={pieceAModifier} />
            <Button>Modifier</Button>
        </>
    )
}