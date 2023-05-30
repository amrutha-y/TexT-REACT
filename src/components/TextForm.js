import React , {useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState('Enter text here');
   
    const handleChange = (event)=>{
       // console.log("Change");
        setText(event.target.value);
    }
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked:"+text);
        setText(text.toUpperCase());
    }
    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked:"+text);
        setText(text.toLowerCase());
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      return (
    <>
    <div>
  <h1>{props.heading}</h1>
<div className="my-3">
  
  <textarea className="form-control" value = {text} onChange={handleChange} id="myBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-danger mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-warning mx-2" onClick={speak}>Text to Speech</button>

    </div>
    <div className="container my-3">
    <h2>Text Summary</h2> 
    <p>{text.split(" ").length} words and {text.length} characters</p> 
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h2>Preview</h2>
    {text}
    </div>   
    </>
  )
}
