import { useState } from "react"
const Button =({onclick, text}) =>{
  return (
    <button onClick={onclick}> {text} </button>
  )
}
const StatisticLine =({text, value})=>{
  return (
    <div>
      <p>{text}: {value}</p>
    </div>
  )
}
const Statistics =({positive, average, all, good, bad, neutral})=>{
  if(!all){
    return <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
      </div>
  }

  return (
    <table>
      <thead><tr><td><h1>Statistics</h1></td></tr></thead>
      <tbody>
      <tr><td><StatisticLine text={"good"} value={good}/></td></tr>
      <tr><td><StatisticLine text="neutral" value={neutral}/></td></tr>
      <tr><td><StatisticLine text={"bad"} value={bad}/></td></tr>
      </tbody>
      <tfoot>
      <tr><td>all:</td><td>{all}</td></tr>
      <tr><td>average</td><td>{average}</td></tr>
      <tr><td>Positive</td><td>{positive}</td></tr>
      </tfoot>     
    </table>
  )

}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const addGood =()=>{
    const updateGood = good + 1
    setGood(updateGood)
    setAll(updateGood + bad + neutral)
  }
  const addNeutral =()=>{
    const updateNeu = neutral + 1
    setNeutral(updateNeu)
    setAll(updateNeu + good + bad)
  }
  const addBad =()=>{
    const updateBad = bad + 1
    setBad(updateBad)
    setAll(updateBad + good + neutral)
  }
  const average =()=> all / 3
  const positive =()=> good / all * 100
    
  return (
    <>
      <h1>give feedback</h1>
      <Button onclick={addGood} text={"good"} />
      <Button onclick={addNeutral} text={"neutral"} />
      <Button onclick={addBad} text={"bad"} />
      
      <Statistics good={good} bad={bad} neutral={neutral} positive={positive()} average={average()} all={all} />
    </>
  )
}

export default App
