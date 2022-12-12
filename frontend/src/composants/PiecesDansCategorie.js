import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const PiecesDansCategorie = ({ categorie, pieces, estAdmin, pourDemande, ajouterDemande }) => {
    return (
        <div key={categorie}>
            <h4>{categorie}</h4>
            <ul>
                {
                    pieces.map(piece => 
                        <li key={piece._id}>{piece.titre} - {piece.artiste}
                        {estAdmin === true ? 
                            <>
                                <Link to={`/modifier/${piece._id}`}>
                                    <Button variant="success" className="m-1" size="sm" >Modifier</Button>
                                </Link>
                                <Link to={`/supprimer/${piece._id}`}>
                                    <Button variant="danger" className="m-1" size="sm" >Supprimer</Button>
                                </Link>
                            </> : undefined }     
                            {pourDemande === true ? 
                            <>    
                                <Button variant="success" className="m-1" size="sm" onclick={ajouterDemande(piece.titre, piece.artiste)}>Ajouter</Button>
                            </> : undefined }                                  
                        </li>
                    )
                }
            </ul>
        </div>
    )
}