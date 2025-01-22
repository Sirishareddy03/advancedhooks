import React from 'react'

const ComplexCal = ({num}) => {
    let calFactorial=(n)=>{// function definisition
        console.log("calculating the factiorial ... of nums")
        return n<=0? 1 : n* calFactorial(n-1)
    }
    let result=calFactorial(num)//fuction calling
  return (
    <div>
        <h1>The factorial of {num} is {result}</h1>
    </div>
  )
}

export default ComplexCal