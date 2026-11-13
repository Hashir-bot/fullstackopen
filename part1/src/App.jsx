const Header = (props) => {
  return (
    <div>
      <h1>Title: {props.course}</h1>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>Part: {props.part}</p>
      <p>Exercises: {props.exercises}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Total Exercises: {props.totalexercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
      <Total totalexercises= {exercises1 + exercises2+ exercises3} />
    </div>
  )
}

export default App