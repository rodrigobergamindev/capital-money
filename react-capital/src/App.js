import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Result from './components/Result'

export default function App() {


  const [montant, setMontant] = useState(0)
  const [initialMontant, setInitialMontant] = useState(0)
  const [rate, setRate] = useState(0)
  const [period, setPeriod] = useState(0)
  const [quotas, setQuotas] = useState([])


  const handleChangeMontant = (value) => {
    
    setMontant(value)
    setInitialMontant(value)
  }

  const handleChangeRate = (value) => {
    const rateFormated = 1 + value/100
    setRate(rateFormated)
  }

  const handleChangePeriod = (value) => {
    setPeriod(value)
  }

  

useEffect(() => {
  const calculateResult = () => {
    const parcelas = []
    let newMontant = montant

  for (let parcel = 1; parcel <= period; parcel++) {
    newMontant *= rate
    const valuePerMonth = newMontant - initialMontant
    const newRate = (valuePerMonth * 100) / initialMontant
    const result = { 
      parcel,
      montant: newMontant,
      valuePerMonth,
      rate: newRate ? newRate : 0
    }
    parcelas.push(result)
  }
  setQuotas(parcelas)
  }
  calculateResult()
},[montant, rate, period, initialMontant])
  
  return (
    <div>
      <Header
      onChangeMontant={handleChangeMontant}
      onChangeRate={handleChangeRate}
      onChangePeriod={handleChangePeriod}
      />

    <Result
    quotas={quotas} />
    </div>
  )
}
