import React from 'react';
import formulairePieces from '../formulairePiece';

export const PageModifier = ({pieceAModifier}) =>{
    return(
        <>
            <formulairePieces pieceAModifier={pieceAModifier} />
            <Button>Modifier</Button>
        </>
    )
}