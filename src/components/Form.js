import React, { useState } from 'react'

export default function Form(props) {
    const [text, setText] = useState('');
    const uppercaseOnClick = () => {
        let upperCasedText = text.toUpperCase();
        setText(upperCasedText);
    }
    const uppercaseOnChange = (event) => {
        setText(event.target.value);
    }
    const lowercaseOnClick = () => {
        let lowerCasedText = text.toLowerCase();
        setText(lowerCasedText);
    }
    const capitalizeOnClick = () => {
        let splittedText = text.split(' ');
        let capitalizedText;
        for (let i = 0; i < splittedText.length; i++) {
            splittedText[i] = splittedText[i][0].toUpperCase() + splittedText[i].substr(1);
            console.log(splittedText);
            capitalizedText = splittedText.join(" ");
            setText(capitalizedText);
        }
    }
    const clearOnClick = () => {
        setText('');
    }
    return (
        <div>
            <h1 className={`d-sm-flex my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} className="form-control" value={text} onChange={uppercaseOnChange} id="exampleFormControlTextarea1" rows="3" placeholder='Enter Text Here'></textarea>
            </div>
            <div className="d-sm-flex">
                <button type="button" className={`btn btn-${props.mode === 'light' ? 'primary': 'light'} text-${props.mode === 'light' ? 'white': 'black'}`} onClick={uppercaseOnClick}>Uppercase</button>
                <button type="button" className={`btn btn-${props.mode === 'light' ? 'success': 'light'} mx-3 text-${props.mode === 'light' ? 'white': 'black'}`} onClick={lowercaseOnClick}>Lowercase</button>
                <button type="button" className={`btn btn-${props.mode === 'light' ? 'warning': 'light'} text-${props.mode === 'light' ? 'white': 'black'}`} onClick={capitalizeOnClick}>Captialize</button>
                <button type="button" className={`btn btn-${props.mode === 'light' ? 'danger': 'light'} mx-3 text-${props.mode === 'light' ? 'white': 'black'}`} onClick={clearOnClick}>Clear Text</button>
            </div>
            <div>
                <h2 className={`d-sm-flex my-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Details Of Your Text</h2>
                <h5 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(' ').length - 1} Words and {text.length} characters</h5>
                <h5 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008 * text.split(' ').length} minutes to read</h5>
                <h3 className={`my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h3>
                <h6 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ maxWidth: "100%" }}>{!text ? 'Enter Text To Preview': text}</h6>
            </div>
        </div>
    )
}