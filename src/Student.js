import React from 'react'
import PropTypes from 'prop-types';

const Student = ({name,age,city,information}) => {
    console.log(information)
  return (
   
    <div>
      <h1>Name is {name}</h1>
      <h1>Age is {age}</h1>
      <h1>City is {city}</h1>
      <h1>{information && "Information is true" }</h1>
    </div>
    
  )
  
}

Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    information: PropTypes.bool,
    city:PropTypes.string.isRequired
}

Student.defaultProps={
    city:"india",
}

export default Student
