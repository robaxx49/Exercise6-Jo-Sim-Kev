import React from 'react';
import { Button } from 'react-bootstrap';
import listagePieces from '../listagePieces';


export const PageAdministration = () =>{
    return(
        <>
            <listagePieces isAdmin={true} />
            <Button>Ajouter</Button>
        </>
    )
}