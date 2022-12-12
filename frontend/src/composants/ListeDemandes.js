import { React, useState } from 'react';

export const ListeDemandes = ({demandes}) =>
{
    return (
        <>
            <ul>
                {demandes.map(demande => 
                    <li key={demande}>{demande}</li>
                )}
            </ul>
        </>
    )
}

export default ListeDemandes;