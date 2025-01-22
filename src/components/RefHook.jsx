import React, { useEffect } from 'react'
// step1: importing the useRef Hook
const RefHook = () => {
    let[number]
    // syntax
    let refData=useRef("I am useRef Hook")
    let autoFoc=useRef(" ")
    let count=useRef(1)

    let Increment=()=>{
        count=count.current+1
        console.log("increment value",)
    }
    let forceIncre=()=>{

    }
    //result
    console.log(refData)//{current:null}
    console.log(refData.current)//null
    useEffect(()=>{
        autoFoc.current.focus()
    })

  return (
    <div>
        <input id='' name='' placeholder='enter some name....'/>
        <h1 ref={refData}>Hello I am Learning UseRef</h1>
        <h1>{count.current}</h1>
        <h1 >{number}</h1>
        <button onClick={()=>Increment}>Inc</button>
        <button onClick={()=>forceIncre}>ForceIncre</button>
    </div>
  )
}

export default RefHook