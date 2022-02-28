import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from './components/Form';
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode')));
  const [alert, setAlert] = useState('dark');
  // const [btnCheck, setBtnCheck] = useState('');
  const [check, setChecked] = useState(null);
  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      showAlert('Dark Mode Has Been Enabled', 'light');
      document.title = 'Text Utility - Dark Mode';
      document.body.style.backgroundColor = '#212529';
      localStorage.setItem('mode', JSON.stringify('dark'));
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Has Been Enabled', 'dark');
      document.title = 'Text Utility - Light Mode';
      localStorage.setItem('mode', JSON.stringify('light'));
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
  let loadMode = () => {
    let localData = JSON.parse(localStorage.getItem('mode'));
    if (localData == 'dark') {
      setMode('dark');
      showAlert('Dark Mode Has Been Enabled', 'light');
      document.body.style.backgroundColor = '#212529';
      document.title = 'Text Utility - Dark Mode';
      setChecked(true);
    }
    else {
      setMode('light');
      showAlert('Light Mode Has Been Enabled', 'dark');
      document.body.style.backgroundColor = 'white';
      document.title = 'Text Utility - Light Mode';
      setChecked(false);
    }
  }
  window.onload = function () {
    loadMode();
  }
  return (
    <div>
      <Navbar mode={mode} mode={mode} check={check} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Form mode={mode} heading='Enter Text To See The Magic' alert={alert} />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;