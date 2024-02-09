import './App.css'
import { useState } from 'react'



function App() {
  const[height,setHeight]=useState("")
  const[weight,setWeight]=useState("")
  const[bim,setBim]=useState(null)
  const[status,setstatus]=useState("")
  const [error,setError]=useState("")
  function calculate(){
    const isheight=/^\d+$/.test(height)
    const isweight=/^\d+$/.test(weight)

    if(isheight && isweight){
      const metierheight=height/100
      const BIMvalue=weight/(metierheight * metierheight)
      setBim(BIMvalue.toFixed(2))
      console.log(BIMvalue)
      if(BIMvalue<18.5){
        setstatus("Under Weight")
      }
      else if(BIMvalue>=18.5 && BIMvalue<24.9){
        setstatus("Normal Weight")
      }
      else if(BIMvalue>=24.9 && BIMvalue<29.9){
        setstatus("Over Weight")
      }
      else{
        setstatus("Obese")
      }
      setError("")

    }
    else{
      setBim(null)
      setstatus("")
      setError("Only enter the number")
    }
  }

  function clearData(){
    setHeight("")
    setWeight("")
    setBim("")
    setstatus("")
    setError("")
    setBim(null)

  }
    
  return (
    <>
    <div className='container'>
      <h1>BMI Calculator</h1>
      <p className='error'>{error}</p>
      <div className='input-group'>
      <input placeholder='Enter height' value={height} onChange={(e)=>setHeight(e.target.value)} ></input>
      <input placeholder='Enter weight' value={weight} onChange={(e)=>{setWeight(e.target.value)}}></input>
      </div>
      
      <div className='btn-group'>
      <button style={{backgroundColor:"green"}} onClick={calculate}>Calculat Value</button>
      <button onClick={clearData} >Clear Data</button>
      </div>
      {bim !==null&&(
      <div className='display-value'>
      <h5>Your BMI is :{bim}</h5>
      <h5>Status :{status}</h5>
      </div>)}
    </div>
    </>
  )
}

export default App
 