const Header = (props) =>{
    return(
      <h1>{props.course.name}</h1>
    )
  }
  
  const Part = (props) => {
      return (
        <div>
          <p>
            {props.name} {props.exercises}
          </p>
        </div>
      )
    }
  
    const Content = ({course, total}) => {
      return (
        <div>
          {course.parts.map(part => 
            <Part 
              key={part.id} 
              name={part.name} 
              exercises={part.exercises}/>
          )}
        </div>
      )
    }
  
  const Course = ({course}) => {
  
    const total = 
      course.parts.reduce( (start,part) => {
        return {exercises: start.exercises + part.exercises}
      })
  
    return (
      <>
      <Header course={course} />
      <Content course={course} />
      <p style={{fontWeight:'bold'}}>Total of {total.exercises} Exercises</p>
      </>
    )
  }

  export default Course
