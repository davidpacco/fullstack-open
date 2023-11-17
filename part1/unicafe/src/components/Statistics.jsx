import StatisticLine from "./StatisticLine"

function Statistics({ good, neutral, bad }) {
  const total = good + neutral + bad

  if (total === 0) {
    return <p>No feedback given</p>
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr><StatisticLine text="good" value={good} /></tr>
          <tr><StatisticLine text="neutral" value={neutral} /></tr>
          <tr><StatisticLine text="bad" value={bad} /></tr>
          <tr><StatisticLine text="all" value={total} /></tr>
          <tr><StatisticLine text="average" value={(good - bad) / total} /></tr>
          <tr><StatisticLine text="positive" value={`${good / total * 100}%`} /></tr>
        </tbody>
      </table>
    </>
  )
}

export default Statistics