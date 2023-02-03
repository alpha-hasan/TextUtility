import { useState } from "react";
import Navbar from "./components/Navbar";
import Form from './components/Form';
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode')));
  const [alert, setAlert] = useState(JSON.parse(localStorage.getItem('mode')));
  const [check, setChecked] = useState(null);



  // Alert Factory Start

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)

    }, 1000);
  }

  // Alert Factory End



  // Theme Toggle Start

  const toggleMode = (e) => {

    // Dark / Light Theme Start

    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark Mode Has Been Enabled', 'light');
      document.title = 'Text Utility - Dark Mode';
      document.body.style.backgroundColor = 'rgb(10, 12, 16)';
      localStorage.setItem('mode', JSON.stringify('dark'));
    }
    else {
      setMode('light');
      showAlert('Light Mode Has Been Enabled', 'dark');
      document.title = 'Text Utility - Light Mode';
      document.body.style.backgroundColor = 'rgb(235, 235, 235)';
      localStorage.setItem('mode', JSON.stringify('light'));
    }
  }

  // Dark / Light Theme End


  // Theme Toggle End



  // Loading Theme Start

  let loadMode = () => {
    let localData = JSON.parse(localStorage.getItem('mode'));


    // Dark / Light Theme Start

    if (localData === 'dark') {
      setMode('dark');
      setChecked(true);
      document.title = 'Text Utility - Dark Mode';
      document.body.style.backgroundColor = 'rgb(10, 12, 16)';
    }
    else {
      setMode('light');
      setChecked(false);
      document.title = 'Text Utility - Light Mode';
      document.body.style.backgroundColor = 'rgb(235, 235, 235)';
    }

    // Dark / Light Theme End


  }
  window.onload = function () {
    loadMode();
  }

  // Loading Theme End

  return (
    <div>
      <Router>
        <Navbar mode={mode} check={check} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route path="/" element={<Form heading='Enter Text To See The Magic' mode={mode} alert={alert} />} />
            <Route exact path="/about" element={<About mode={mode} alert={alert} />} />
            <Route path="/*" element={<Form />} />
          </Routes>
        </div>
      </Router >
    </div >
  );
}

export default App;