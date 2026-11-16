const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Title: {props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Name: {props.part[0].name}
        <br />
        Exercises: {props.part[0].exercises}
      </p>
      <p>
        Name: {props.part[1].name}
        <br />
        Exercises: {props.part[1].exercises}
      </p>
      <p>
        Name: {props.part[2].name}
        <br />
        Exercises: {props.part[2].exercises}
      </p>
    </div>
  )
}
const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Total Exercises: {props.totalexercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
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
  return (
    <div>
      <Header course={course.name} />
      <Content part={course.part} />
      <Total totalexercises={course.part[0].exercises + course.part[1].exercises + course.part[2].exercises} />
    </div>
  )
}

export default App