import React from 'react'
import InputMontant from './InputMontant'
import InputRate from './InputRate'
import InputPeriod from './InputPeriod'
import css from './header.module.css'


export default function Header({onChangeMontant, onChangeRate, onChangePeriod}) {
    return (
        <div>
        <div className={css.bar}></div>
        <h1 style={{textAlign:'center'}}>Capital Investment</h1>
        <div className={css.flexRow}>
            <InputMontant montant={onChangeMontant}/>
            <InputRate rate={onChangeRate}/>
            <InputPeriod period={onChangePeriod}/>
        </div>
        </div>
    )
}
