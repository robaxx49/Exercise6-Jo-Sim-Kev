import React from 'react';
import { Button } from 'react-bootstrap';
import ListagePieces from '../listagePieces';


export const PageAdministration = () =>{
    return(
        <>
            <ListagePieces isAdmin={true} />
            <Button>Ajouter</Button>
        </>
    )
}