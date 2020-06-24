import React from 'react'
import css from './result.module.css'
import {formatMoney, format} from '../helpers/formatNumber'


export default function Result({quotas}) {

        return ( 
            <div className={css.result}>
                  {
                        quotas.map(quota => {
                        const {parcel,montant,valuePerMonth, rate} = quota
                            return (
                                <div className={css.data} key={parcel}>
                                    <div className={css.header}>
                                    <span style={{ fontWeight: 'bold', marginRight:'10px' }}>{parcel}</span>
                                    </div>
                                    <div className={css.content}> 
                                    <span style={{ color: '#4caf50' }}>{formatMoney(montant)}</span>
                                    {valuePerMonth >= 0 ? <span style={{ color: '#4caf50' }}>{'+' + formatMoney(valuePerMonth)}</span> : <span style={{ color: '#bf360c' }}>{formatMoney(valuePerMonth)}</span>}
                                    {rate >= 0 ? <span style={{ color: '#0277bd' }}>{'+' + format(rate) + '%'}</span> : <span style={{ color: '#ff5722' }}>{format(rate) + '%'}</span>}
                                    </div>
                                </div>
                        )
                         })
                    }
               </div>
    
        )
    }

