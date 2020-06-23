import React from 'react'

export default function InputMontant({montant}) {

    const handleChangeInput = (event) => {
        montant(+event.target.value)
    }

    return (
        <div className="input-field col s6" style={{margin:'50px', minWidth:'200px', maxWidth:'200px'}}>
            <input
                id="montant"
                type="number"
                className="validate"
                onChange={handleChangeInput}
            />
            <label className="active" htmlFor="montant">Montante Inicial</label>
        </div>
    )
}
