import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from './components/Form';
import Alert from "./components/Alert";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1000);
  }
  const toggleMode = () => {
    if (mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert('Dark Mode Has Been Enabled', 'light');
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Has Been Enabled', 'dark');
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <Form mode={mode} heading='Enter Text To See The Magic' alert={alert} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
