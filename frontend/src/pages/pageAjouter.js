import React from 'react';
import formulairePieces from '../formulairePiece';
import { Button } from 'react-bootstrap';


export const PageAjouter = () =>{
    return(
        <>
            <formulairePieces />
            <Button>Ajouter</Button>
        </>
    )
}