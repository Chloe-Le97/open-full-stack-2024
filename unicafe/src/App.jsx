import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if (props.total > 0){
    return(
      <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>Good</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>All</td>
            <td>{props.total}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{props.average}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{props.positive}</td>
          </tr>
        </tbody>
      </table>
  </div>
    )
  }
 return(
  <div>
    <h2>Statistics</h2>
    No feedback given
  </div>
 )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const setGoodClick = () =>{
    const goodUpdated = good + 1;
    setGood(goodUpdated);
    const totalUpdated = goodUpdated + neutral + bad
    setTotal(totalUpdated);
    const averagePoint = (goodUpdated - bad)/(totalUpdated);
    setAverage(averagePoint);
    setPositive(goodUpdated/totalUpdated);
  }
  const setNeutralClick = () =>{
    const neutralUpdated = neutral + 1;
    setNeutral(neutralUpdated);
    const totalUpdated = neutralUpdated + good + bad
    setTotal(totalUpdated);
    const averagePoint = (good - bad)/(totalUpdated);
    setAverage(averagePoint);
    setPositive(good/totalUpdated);
  }
  const setBadClick = () =>{
    const badUpdated = bad + 1; 
    setBad(badUpdated);
    const totalUpdated = badUpdated + good + neutral;
    setTotal(totalUpdated);
    const averagePoint = (good - badUpdated)/(totalUpdated);
    setAverage(averagePoint);
    setPositive(good/totalUpdated);
  }
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={setGoodClick} text="Good"></Button>
      <Button handleClick={setNeutralClick} text="Neutral"></Button>
      <Button handleClick={setBadClick} text="Bad"></Button>
      <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App