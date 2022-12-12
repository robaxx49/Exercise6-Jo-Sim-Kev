import { React } from 'react';

export const ListeDemandes = ({demandes}) =>
{
    return (
        <>
            <ul>
                {demandes.map(demande => 
                    <li key={demande._id}>{demande.nom}
                        <ul>{demande.pieces.map(piece =>
                                <li key={piece}>{piece}</li>
                            )}
                        </ul>
                    </li>
                )}
            </ul>
        </>
    )
}

export default ListeDemandes;