import React from 'react'

export default function InputRate({rate}) {
    const handleChangeInput = (event) => {
        rate(+event.target.value)
    }



    return (
        <div className="input-field col s6" style={{margin:'50px', minWidth:'200px', maxWidth:'200px'}}>
            <input
                className="validate"
                id="rate"
                type="number"
                onChange={handleChangeInput}
            />
            <label className="active" htmlFor="rate">Taxa de juros mensal</label>
        </div>
    )
}
