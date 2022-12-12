import { React } from 'react';

export const ContenuDemande = ({demande}) =>
{
    return (
        <>
            <ul>
                {demande.map(demande => 
                    <li key={demande}>{demande}</li>
                )}
            </ul>
        </>
    )
}

export default ContenuDemande;