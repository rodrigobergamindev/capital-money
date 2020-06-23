import React from 'react'
import css from './result.module.css'


export default function Message({prop}) {
    return (
        <div>
            {prop === 'rate' ? <div className={css.message}><span>Informe uma taxa de juros entre -12% e 12%</span></div> :
             prop === 'period' ? <div className={css.message}><span>Informe um período entre 1 e 36 meses</span></div>: 
            prop === 'montant' ? <div className={css.message}><span>Informe um montante entre R$1 e R$100.000</span></div>: ''}
        </div>
    )
}
