const Header =(props)=>{
  console.log(props.course)
  return (
    <>
      <h1> {props.course.name} </h1>
    </>
  )
}
const Content =(props)=>{
  console.log(props.course)
  return (
    <div>

        {props.course.map(value=>{
          return (
            <p>{value.name} {value.exercises} </p>
          )
        })}

    </div>
  )
}
const Total =(props)=>{
  console.log(props.course)
  return (
    <p>
      Number of exercises {props.course[0].exercises + props.course[1].exercises + props.course[2].exercises}
    </p>
  )
}


const App = () => {
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

  return (
    <div>
      <Header course={course} />
      <Content course={course.parts}/>
      <Total course = {course.parts}/>
    </div>
  )
}

export default App