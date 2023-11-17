import Part from "./Part";

function Content(props) {
  return (
    <>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
      <div className="">
        {props.text}
      </div>
    </>
  )
}

export default Content