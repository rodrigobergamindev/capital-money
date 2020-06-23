import React from 'react'

export default function InputMontant({montant}) {

    const handleChangeInput = (event) => {
        montant(+event.target.value)
    }

    return (
        <div>

            <input
                id="montant"
                type="number"
                onChange={handleChangeInput}
            />
            <label className="active" htmlFor="montant">Montante Inicial</label>
        </div>
    )
}
