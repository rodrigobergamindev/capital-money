import React from 'react'

export default function InputRate({rate}) {
    const handleChangeInput = (event) => {
        rate(+event.target.value)
    }



    return (
        <div>
            <input
                id="rate"
                type="number"
                onChange={handleChangeInput}
            />
            <label className="active" htmlFor="rate">Taxa de juros mensal</label>
        </div>
    )
}
