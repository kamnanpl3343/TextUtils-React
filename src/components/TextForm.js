import React from 'react'
// import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';

export default function TextForm(props) {
  /* let mystyle=
  {
      margin:"20px auto",
  } */
  const [text, setText] = useState('');
  //  setText("new text");
  const handleUpClick = () => {
    console.log("Uppercase was clicked", +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleLoClick = () => {
    console.log("Lowercase was clicked", +text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }
  const handleClearClick = () => {
    console.log("Clear was clicked", +text);
    let newText = '';
    setText(newText);
    props.showAlert("Text is cleared", "success");
  }
  /*   const ternary = () => {
  {props.mode === 'light' ? 'dark' : 'light'};
    } */
  const handleUpChange = (e) => {
    console.log("Onchange clicked");
    setText(e.target.value)
  }

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Enter the Text Below:</h2>
        {/*   <textarea value={text} style={{ backgroundColor: props.mode===
        'dark'?'grey' : 'white',color:props.mode ==='dark' ? 'white' : 'black'}}
         onChange={handleUpChange} rows="8" cols="8"></textarea> */}

        <form>
          <div className="form-group">
            <textarea className="form-control" value={text} style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'
            }} onChange={handleUpChange} rows="8">

            </textarea>
          </div>
        </form>

        <div>
          <Button disabled={text.length===0} variant="primary" type="submit" className='m-3' onClick={handleUpClick}>
            Convert to Uppercase
          </Button>
          <Button disabled={text.length===0} variant="primary" type="submit" className='m-3' onClick={handleLoClick}>
            Convert to Lowercase
          </Button>
          <Button disabled={text.length===0} variant="primary" type="submit" className='m-3' onClick={handleClearClick}>
            Clear text
          </Button>
        </div>
      </div>


      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >

        <h2>Your text Summary</h2>
           <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}minutes to read.</p>
        <h2>Preview</h2>
        <p>{text === '' ? 'No text to preview' : text}</p>

      </div>
    </>
  )
}

