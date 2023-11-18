import Header from "./Header"
import Total from "./Total"
import Content from "./Content"

function Course({ course }) {
  const total = course.parts.reduce((acc, course) => acc + course.exercises, 0)

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={total} />
    </div>
  )
}

export default Course