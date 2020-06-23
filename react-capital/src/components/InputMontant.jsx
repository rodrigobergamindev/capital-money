import React from 'react'

export default function InputMontant({montant}) {

    const handleChangeInput = (event) => {
        montant(+event.target.value)
    }

    return (
        <div className="input-field col s6">
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
