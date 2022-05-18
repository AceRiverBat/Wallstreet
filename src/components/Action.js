import React from 'react';
import { useState } from 'react';

export default function Calculatrice({ initialCalcul }, { initialNombre}) {
    const [calcul, setCalcul] = useState(initialCalcul);
    let nombre= useState(localStorage.getItem('montant'));
    let [resultat, setResultat] = useState(0);
    return (
        <>
        <br />
        <h4>Ajouter une opération :</h4>
        <input type="text" placeholder="Entrez un montant" value={calcul} onChange={(e) => setCalcul(e.target.value)} />
            <div>
                
                <button type="button" class="btn btn-primary" onClick={() => setResultat(parseInt(calcul) + parseInt(nombre))}>+</button>
                <button type="button" class="btn btn-primary" onClick={() => setResultat(calcul - nombre)}>-</button>
                <button type="button" class="btn btn-primary" onClick={() => setResultat(calcul * nombre)}>*</button>
               </div>
               <p>{nombre}</p>
            
            <h4>= { resultat }</h4>
            <br />
        </>
    );
}