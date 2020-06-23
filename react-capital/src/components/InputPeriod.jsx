import React from 'react'

export default function InputPeriod({period}) {
    const handleChangeInput = (event) => {
        period(+event.target.value)
    }

    return (
        <div>
            <input
                id="period"
                type="number"
                min="0"
                onChange={handleChangeInput}
            />
            <label className="active" htmlFor="period">Período (meses)</label>
        </div>
    )
}
