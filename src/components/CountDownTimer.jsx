import React from 'react'
import {useState,useEffect,useRef} from "react"
const CountDownTimer = () => {
    //initial timer values
    let [timeLeft,setTimeLeft]=useState(60)//initial value of timer
    let timerRef=useRef(null)//used for holding the Interval Ids

    // function to start the timer
    const startTimer=()=>{
        if(timerRef.current)return;
        //these avoids causing the multiple renders
        timerRef.current=setInterval(()=>{
        setTimeLeft(prevtime=>{
            if(prevtime<=1){// checking the
                clearInterval(timerRef.current)
                timerRef.current=null;
                return 0
            }

            return prevtime - 1
        })
    },1000)// timer update every sec
    }
    // function to stop the timer
    const stopTimer=()=>{
        clearInterval(timerRef.current)
        timerRef.current=null
    }
    // function to reset the timer
    const resetTimer=()=>{
     stopTimer()
     setTimeLeft(60)
    }
    // useEffect to clear the timer from the component -unmounting
    useEffect(()=>{
        return ()=>clearInterval(timerRef.current)
    },[])
  return (
   <>
   {/* <refHook/>*/}
   <h1 style={{textAlign:"center",marginTop:'70px'}}>Count Down Timer</h1>
   <div className='container' style={{marginTop:'100px'}}>
    <div className='card p-4 text-center shadow my-5' style={{height:"250px"}}>
    <h1 className='display text-success my-3' >{timeLeft}</h1>
    <div className='buttons d-flex justify-content-center'>
    <button className='btn btn-success' onClick={()=>startTimer()}>start</button>
    <button className='btn btn-warning mx-1 ' onClick={()=>stopTimer()}>stop</button>
    <button className='btn btn-danger' onClick={()=>resetTimer()}>reset</button>
    </div>
   </div>
   </div>
   </>
  )
}

export default CountDownTimer