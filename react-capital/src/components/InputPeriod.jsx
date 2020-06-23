import React from 'react'

export default function InputPeriod({period}) {
    const handleChangeInput = (event) => {
        period(+event.target.value)
    }

    return (
        <div className="input-field col s6" style={{margin:'50px', minWidth:'200px', maxWidth:'200px'}}>
            <input
                id="period"
                type="number"
                min="0"
                className="validate"
                onChange={handleChangeInput}
            />
             <label className="active" htmlFor="period">Período (meses)</label>
        </div>
    )
}
