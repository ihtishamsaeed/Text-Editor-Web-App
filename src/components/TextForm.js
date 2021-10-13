import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        //    console.log("Uppercase was clicked " + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleloClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase", "success");
    }
    const clearClick = () => {
        let newtext = '';
        setText(newtext);
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event) => { //onn change is must
        //    console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }


    const [text, setText] = useState('');
    // text="new text" wrong way text =to change, settext = to change by 

    // setText("new text"); //right way
    return (
        // this is called jsx fragment
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to lowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearClick}>Reset</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read</p>
                <p>Preview</p>
                <p>{text.length > 0 ? text : "Your preview will be shown here"}</p>
            </div>
        </>
    );
}
