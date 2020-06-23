import React from 'react'
import css from './result.module.css'
import Quota from './Quota'


export default function Result({quotas}) {
    
    return ( 
        <div className={css.result}>
                {
                    quotas.map(quota => {
                    return <Quota key={quota.parcel} quota={quota}/> 
                     })
                }
           </div>

    )
}
