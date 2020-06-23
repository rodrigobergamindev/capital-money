import React from 'react'
import {formatMoney, format} from '../helpers/formatNumber'

export default function Quota({quota}) {
    const {parcel,montant,valuePerMonth, rate} = quota
    return (
        <div className="container">
            <span>Parcela {parcel}</span><br/>
            <span>Montante {formatMoney(montant)}</span><br/>
            <span>Valor por Mês {formatMoney(valuePerMonth)}</span><br/>
            <span>Juros {format(rate)} %</span> 
        </div>
    )
}
