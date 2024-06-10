import React, { useState } from 'react'

export default function About(props) {
   

//    const[myStyle , setMyStyle] = useState({
//         color:'black',
//         backgroundColor:'white'
//    })
    
   let myStyle = {
    color:props.mode ==='dark'? 'white': 'black',
    backgroundColor:props.mode ==='dark'?'#0a58ca':'white',
    border: '1px solid white',
    
   }
  return (
    
    <div className="container my-8" style={myStyle}>
        <h1 class="my-6">About Us</h1>
        <div className="accordion my-6" style={myStyle} id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   <strong> Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free To Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text.TextUtils report the number of words and characters.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in every browser such as chrome, FireFox, Internet Explorer, Safari and Opera.
                </div>
                </div>
            </div>
       </div>
       <div>
       
       </div>
   </div>
   )
}
