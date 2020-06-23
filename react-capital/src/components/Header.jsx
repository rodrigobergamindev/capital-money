import React from 'react'
import InputMontant from './InputMontant'
import InputRate from './InputRate'
import InputPeriod from './InputPeriod'
import css from './header.module.css'


export default function Header({onChangeMontant, onChangeRate, onChangePeriod}) {
    return (
        <div>
        <div className={css.bar}></div>
        <div className={css.header}style={{textAlign:'center', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}><h1>Capital Investment</h1>
        <img src={"https://img.icons8.com/clouds/96/000000/macbook-money.png"} alt={"Capital Investment"}/>
        </div>
        <div className={css.flexRow}>
            <InputMontant montant={onChangeMontant}/>
            <InputRate rate={onChangeRate}/>
            <InputPeriod period={onChangePeriod}/>
        </div>
        </div>
    )
}
