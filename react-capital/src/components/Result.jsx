import React from 'react'
import css from './result.module.css'
import {formatMoney, format} from '../helpers/formatNumber'


export default function Result({quotas}) {

        return ( 
            <div className={css.result}>
                    <table className={`striped ${css.tableResult}`}>
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Capital</th>
                            <th>Rendimento</th>
                            <th>Juros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        quotas.map(quota => {
                        const {parcel,montant,valuePerMonth, rate} = quota
                            return (
                                <tr key={parcel}>
                                    <td style={{ fontWeight: 'bold' }}>{parcel}</td>
                                    <td style={{ color: '#4caf50' }}>{formatMoney(montant)}</td>
                                    {valuePerMonth >= 0 ? <td style={{ color: '#4caf50' }}>{'+' + formatMoney(valuePerMonth)}</td> : <td style={{ color: '#bf360c' }}>{formatMoney(valuePerMonth)}</td>}
                                    {rate >= 0 ? <td style={{ color: '#0277bd' }}>{'+' + format(rate) + '%'}</td> : <td style={{ color: '#ff5722' }}>{format(rate) + '%'}</td>}
                                </tr>
                        )
                         })
                    }
                    </tbody>
                </table>
               </div>
    
        )
    }

