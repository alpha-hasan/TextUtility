import React, { useState } from 'react'

export default function Form(props) {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(null)
    const uppercaseOnClick = () => {
        let upperCasedText = text.toUpperCase();
        setText(upperCasedText);
    }
    const onChange = (event) => {
        setText(event.target.value);
    }
    const lowercaseOnClick = () => {
        let lowerCasedText = text.toLowerCase();
        setText(lowerCasedText);
    }
    const capitalizeOnClick = () => {
        let splittedText = text.toLowerCase().split(' ');
        let capitalizedText;
        for (let i = 0; i < splittedText.length; i++) {
            if (splittedText[i]) {
                splittedText[i] = splittedText[i][0].toUpperCase() + splittedText[i].slice(1);
                capitalizedText = splittedText.join(" ");
                setText(capitalizedText);
            }
        }
    }
    console.log(text.split(' '));
    const clearOnClick = () => {
        setText('');
    }
    return (
        <div>
            <h1 className={`d-sm-flex my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea style={{ backgroundColor: props.mode === 'dark' ? 'rgb(34, 38, 42)' : props.mode === 'red' ? 'rgb(88, 11, 15)' : props.mode === 'yellow' ? 'rgb(189, 149, 30)' : props.mode === 'green' ? 'rgb(18, 42, 0)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} className="form-control" value={text} onChange={onChange} id="exampleFormControlTextarea1" rows="3" placeholder='Enter Text Here'></textarea>
            </div>
            <div className="d-sm-flex">
                <button type="button" className={`btn btn-${props.mode === 'light' ? 'primary' : 'light'} text-${props.mode === 'light' ? 'white' : 'black'}`} onClick={uppercaseOnClick}>Uppercase</button>
                <button type="button" className={`btn btn-${props.mode === 'light' ? 'success' : 'light'} mx-3 text-${props.mode === 'light' ? 'white' : 'black'}`} onClick={lowercaseOnClick}>Lowercase</button>
                <button type="button" className={`btn btn-${props.mode === 'light' ? 'warning' : 'light'} text-${props.mode === 'light' ? 'white' : 'black'}`} onClick={capitalizeOnClick}>Captialize</button>
                <button type="button" className={`btn btn-${props.mode === 'light' ? 'danger' : 'light'} mx-3 text-${props.mode === 'light' ? 'white' : 'black'}`} onClick={clearOnClick}>Clear Text</button>
            </div>
            <div>
                <h2 className={`d-sm-flex my-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Details Of Your Text</h2>
                <h5 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(/\s+/).filter((element) => { return element.length != 0 }).length} Words and {text.length} characters</h5>
                <h5 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008 * text.split(' ').filter((element) => { return element.length != 0 }).length} minutes to read</h5>
                <h3 className={`my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h3>
                <h6 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ maxWidth: "100%", wordBreak: 'break-word' }}>{!text ? 'Enter Text To Preview' : text}</h6>
            </div>
        </div>
    )
}