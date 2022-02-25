import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from './components/Form';
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState('');
  const [alert, setAlert] = useState('dark');
  const [btnCheck, setBtnCheck] = useState('');
  const [check, setChecked] = useState('');
  let loadMode = () => {
    let localData = JSON.parse(localStorage.getItem('mode'));
    if (localData == 'dark') {
      setMode('dark');
      showAlert('Dark Mode Has Been Enabled', 'light');
      document.body.style.backgroundColor = '#212529';
      document.title = 'Text Utility - Dark Mode';
      setBtnCheck('flexSwitchCheckChecked');
      setChecked('checked');
    }
    else {
      setMode('light');
      showAlert('Light Mode Has Been Enabled', 'dark');
      document.body.style.backgroundColor = 'white';
      document.title = 'Text Utility - Light Mode';
      setBtnCheck('flexSwitchCheckDefault');
      setChecked('');
    }
  }
  window.onload = function () {
    loadMode();
  }
  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      showAlert('Dark Mode Has Been Enabled', 'light');
      document.title = 'Text Utility - Dark Mode';
      document.body.style.backgroundColor = '#212529';
      localStorage.setItem('mode', JSON.stringify('dark'));
      setBtnCheck('flexSwitchCheckChecked');
      setChecked('checked');
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Has Been Enabled', 'dark');
      document.title = 'Text Utility - Light Mode';
      localStorage.setItem('mode', JSON.stringify('light'));
      setBtnCheck('flexSwitchCheckDefault');
      setChecked('');
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)

    }, 1000);
  }

  return (
    <div>
      <Navbar mode={mode} btnCheck={btnCheck} check={check} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Form mode={mode} heading='Enter Text To See The Magic' alert={alert} />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;