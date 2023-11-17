import { useState } from "react"
import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"

function Button({ text, handleClick }) {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const [value, setValue] = useState(10)

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      {value}
      <Button handleClick={() => setValue(1000)} text="thousand" />
      <Button handleClick={() => setValue(0)} text="reset" />
      <Button handleClick={() => setValue(value + 1)} text="increment" />
    </div>
  )
}

export default App