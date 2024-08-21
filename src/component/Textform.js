import React,{useState} from 'react'
import './Textform.css'
export default function Textform(props) {
  const [text, setText] = useState('');
  

  const wordlength=(str)=>{
    const word=str.split(' ').filter(word => word.length > 0);
    // console.log(word);
    // console.log(str.charAt(0));
    return word.length;
  }

  const wordcount=wordlength(text);

  const handleUpClick=()=>{
    let newtext=text.toUpperCase();
    console.log("Uppercase was clicked");
    setText(newtext);
    props.showalert("Converted to Uppercase","success");
    
  }

  const handleTitleCase = () => {
    const convertToTitleCase = (str) => {
      console.log(str
        .toLowerCase()
        .split(' ')  //here if you use ''(no space) then this .split('') return array of character and if you use ' '(space) then .split(' ') return of word
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')  // map give new array and join is use to join all the element of array
        );
      return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };
    
    setText(convertToTitleCase(text));
    props.showalert("Converted to Titlecase","success");   
  };
    
    
  

  const clearText=()=>{
    let newtext="";
    console.log("All text deleted");
    setText(newtext);
    props.showalert("All text are cleared","success");
    
  }

 

  const handleLpClick=()=>{
    let newtext=text.toLowerCase();
    console.log("Lowercase was clicked");
    setText(newtext);
    props.showalert("Converted to Lowercase","success");
  }

  const handleCopy=()=>{
    var text=document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showalert(" Copied to Clipboard! ","success");
  }

  const handleOnChange=(event)=>{
    console.log("onchageClicked");
    setText(event.target.value);
  }
  // setText("this is my text");
  return (
  <>
    <div className='container'>
      <h1 style={{color : props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className={`form-control text-${props.mode==='dark'?'white':'#042743'}`} value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#042743':'white'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" id="but-1" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary" id="but-2" onClick={handleLpClick}>Convert To Lowercase</button>
      <button className="btn btn-primary" id="but-3" onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary" id="but-4" onClick={handleTitleCase}>Conver To Titlecse</button>
      <button className="btn btn-primary" id="but-5" onClick={handleCopy}>Copy to Clipboard</button>
      
      {/* <p>{titleCaseText}</p> */}
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
      <h1 >Text Summury</h1>
      <p  >{wordcount} words and {text.length} characters</p>
      <h6 >{0.08*text.split(" ").length} minutes to read</h6>
      {console.log(text.split(" ").length)}
      <h2>Preview</h2>      
      <div>
      <p className="fixed-width-paragraph">{text.length>0?text:"Enter something in textbox to preview.."}</p>        
      </div>
      
    </div>
  </>
  )
}


// import React, { useState } from 'react';

// const TitleCaseConverter = () => {
//   const [text, setText] = useState('');
//   const [titleCaseText, setTitleCaseText] = useState('');

//   const handleTitleCase = () => {
//     const convertToTitleCase = (str) => {
//       return str
//         .toLowerCase()
//         .split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(' ');
//     };

//     setTitleCaseText(convertToTitleCase(text));
//   };

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={text} 
//         onChange={(e) => setText(e.target.value)} 
//         placeholder="Enter text here" 
//       />
//       <button onClick={handleTitleCase}>Convert to Title Case</button>
//       <p>Title Case Text: {titleCaseText}</p>
//     </div>
//   );
// };

// export default TitleCaseConverter;
