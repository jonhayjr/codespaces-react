import React, {useState} from "react";
import {Link} from "react-router-dom";

const people = 
[
  {
    firstName: "Don",
    lastName: "McClain",
    age: 59,
    occupation: "doctor"
  },
  {
    firstName: "Suzy",
    lastName: "Abraham",
    age: 67,
    occupation: "teacher"
  }
]

const Page1 = () => {
  const [num, setNum] = useState(0);

  const subtract = () => {
    setNum(prevNum => {
      console.log(prevNum)
      if (prevNum - 1 < 0) {
        return prevNum;
      }
      return prevNum - 1;
    })
  }

  const add = () => {
    setNum(num + 1);
  }

  return (
    <div>
      <h1>Page1</h1>
      <div>
        <button onClick={subtract}>-</button>
        <p>{num}</p>
        <button onClick={add}>+</button>
      </div>
      <div>
        {
          people.map(person => 
            <div className="person-container">
              <p>Name:{person.firstName} {person.lastName}</p>
              <p>Age: {person.age}</p>
              <p>Occupation: {person.occupation}</p>
            </div>
          )
        }
      </div>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Page1;