const Header =({course})=>{
  console.log(course.name)
  return (
    <>
      <h1> {course.name} </h1>
    </>
  )
}
const Content =({course})=>{
  console.log(course)
  return (
    <div>

        {course.map(value=>{
          return (
            <p>{value.name} {value.exercises} </p>
          )
        })}

    </div>
  )
}
const Total =({course})=>{
  console.log(course)
  return (
    <p>
      Number of exercises {course[0].exercises + course[1].exercises + course[2].exercises}
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