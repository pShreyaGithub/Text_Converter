import React, {useState} from 'react'

export default function TextForm(props) {

  //  State in React js
  const [text , setText] = useState("");

  const handleOnChange= (event) =>{
    // console.log("Onchange");
    setText(event.target.value);
  }

  const handleUpClick= () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlertMessage("Converted to UpperCase" , "success");
  }

  const handleLoClick= () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlertMessage("Converted to LowerCase" , "success");
  }

  const handleInverseClick= () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlertMessage("Content Reversed" , "success");
  }

  const handleClearClick= () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = ("");
    setText(newText);
    props.showAlertMessage("Content cleared" , "success");
  }

  const handleCopy= () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlertMessage("Content copied" , "success");
  }


  return (
      <>
        <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2 className="my-2 mb-4">{props.heading}</h2>
            <div className="mb-4">
               <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#0d6efd':'white', color:props.mode==='dark'?'white':'black', border:"3px solid white"}} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
              <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase
              </button>
              <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase
              </button>
              <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleInverseClick}> Reverse Text
              </button>
              <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text
              </button>
              <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text
              </button>
        </div>

        <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
          <h3> Your Text Summary</h3>
          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes takes to read</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Nothing to preview."}</p>
        </div>
      </>
  )
}
