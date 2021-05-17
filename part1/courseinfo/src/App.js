import React from 'react'


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

  const Header = (props) =>{
    console.log(props)
    return(
       <h1>{props.course.name}</h1>
    )
  }

  const Part = (props) => {
    console.log(props)
      return (
        <div>
          <p>
            {props.part} {props.exercises}
          </p>
        </div>
      )
    }

    const Content = () => {
      return (
        <div>
          <Part part={course.parts[0].name} exercises={course.parts[0].exercises}/>
          <Part part={course.parts[1].name} exercises={course.parts[1].exercises}/>
          <Part part={course.parts[2].name} exercises={course.parts[2].exercises}/>
        </div>
      )
    }

    const Total = (props) => {
      return (
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    )
    }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

export default App