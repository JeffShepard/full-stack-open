import React, { useState } from 'react'

const Button = ({handleClick,text}) => 
    <button onClick={handleClick}>{text}</button>

const StatisticLine = ({value,text}) => <div>{text}  {value}</div>

const headerSize = {
  fontSize: '30px'
}

const Statistics = ({good,neutral,bad,all,average,positive}) => {
  if (!all) {
    return (
    <div>No Feedback Given</div>)
  }

  positive = parseFloat(positive * 100).toFixed(1) + "%";

    average = average.toFixed(2)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={headerSize}>Statistics</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td><StatisticLine value={good} text='Good'/></td>
            </tr>
            <tr>
            <td><StatisticLine value = {neutral} text='Neutral'/></td>
            </tr>
            <tr>
            <td><StatisticLine value = {bad} text='Bad'/></td>
            </tr>
            <tr>
            <td><StatisticLine value = {all} text='All'/></td>
            </tr>
            <tr>
            <td><StatisticLine value = {average} text='Average'/></td>
            </tr>
            <tr>
            <td><StatisticLine value = {positive} text='Positive'/></td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => setGood(good +1)
  const neutralFeedback = () => setNeutral(neutral +1)
  const badFeedback = () => setBad(bad +1)
  const average = (good+neutral+bad)/3
  const all = (good+neutral+bad)
  const positive = (good/all)



  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={goodFeedback} text='Good'/>
      <Button handleClick={neutralFeedback} text='Neutral'/>
      <Button handleClick={badFeedback} text='Bad'/>
      <Statistics good={good} neutral={neutral} bad={bad} average={average} all={all} positive={positive}/>


    </div>
  )
}

export default App

