import React from 'react'
import { useState } from 'react'
export default function InputForm(props) {
  let [text, setText]=useState('')
const handleUpclick=(event)=>{
 let txt= text.toUpperCase()
 setText(txt)
 event.preventDefault()
}
const handleLowclick=(e)=>{
 let txt=text.toLowerCase()
 setText(txt)
 props.setA("text changed to lower case","primary")
 e.preventDefault()
}
const Remove=()=>{
    setText('')
}
const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

const handleChange=(event)=>
   setText(event.target.value)
   console.log(text)

    return (
   

<> 
  <div className="container">
   <h1 className={`text-${props.theme==='light'?'black':'light'}`}>Enter Your text Below to Analyse</h1>
    <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="10"></textarea>
    
  
  <button className='btn btn-primary mx-1 my-1' onClick={handleUpclick}>To Upper Case</button> 
  <button className='btn btn-primary mx-1 my-1' onClick={handleLowclick}>ToLowerCase</button>
  <button className='btn btn-primary mx-1 my-1' onClick={Remove}>Remove</button>  
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
  </div>
   <div className={`container my-3 text-${props.theme==='light'?'black':'light'} `}>
     <h1>Text Summary</h1>
     <p>number of characters:{text.length}</p>
     <p>Number of words:{text.split(' ').length}</p>
     <p>{0.008 *  text.split(" ").length} Minutes read</p>
     <h2>Preview</h2>
     <p>{text}</p>
   </div>
  </>  
  )
}
