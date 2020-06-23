import React from 'react'
import InputMontant from './InputMontant'
import InputRate from './InputRate'
import InputPeriod from './InputPeriod'
import css from './header.module.css'


export default function Header({onChangeMontant, onChangeRate, onChangePeriod}) {
    return (
        <div>
        <h1 style={{textAlign:'center'}}>Capital Investment</h1>
        <div className={css.container}>
            <InputMontant montant={onChangeMontant}/>
            <InputRate rate={onChangeRate}/>
            <InputPeriod period={onChangePeriod}/>
        </div>
        </div>
    )
}
