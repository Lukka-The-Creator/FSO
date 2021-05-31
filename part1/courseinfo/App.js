import React from 'react'

const Header = (props) => { 
    return (
      <div>
        <h1>
          {props.course}
        </h1>
      </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part part1 = "Fundamentals of React" number1 = "10"/>
      <Part part2 = "Using props to pass data" number2 = "7"/>
      <Part part3 = "State of a component" number3 = "14"/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.number1}
      </p>
      <p>
        {props.part2} {props.number2}
      </p>
      <p>
        {props.part3} {props.number3}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.sum}
      </p>
    </div>
  )
}

const App = () => {
  const course = "Half Stack application development"
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total sum={10+7+14}/>

    </div>
  )
}

export default App