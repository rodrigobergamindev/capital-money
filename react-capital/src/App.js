import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Result from './components/Result'
import Message from './components/Message'

export default function App() {


  const [montant, setMontant] = useState(0)
  const [rate, setRate] = useState(0)
  const [period, setPeriod] = useState(0)
  const [quotas, setQuotas] = useState([])


  const handleChangeMontant = (value) => {
    setMontant(value)
  }

  const handleChangeRate = (value) => {
    const rateFormated =  1 + (value/100)
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
    let valuePerMonth = newMontant - montant
    const newRate = ((valuePerMonth * 100) / montant)
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
},[montant, rate, period])
  
  return (
    <div>
      <Header
      onChangeMontant={handleChangeMontant}
      onChangeRate={handleChangeRate}
      onChangePeriod={handleChangePeriod}
      />

    {montant === 0 || !quotas || rate === 0 || period === 0 ? <div></div> :
    montant < 0 || montant > 100000 ? <Message prop='montant'/>  : 
    rate > 1.12  ? <Message prop='rate'/> : 
    rate < 0.88 && rate !== 0 ? <Message prop='rate'/> :
    period > 36 || period < 0 ? <Message prop='period'/>  : <Result quotas={quotas}/>}

    </div>
  )
}
