import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter,Route,Routes } from 'react-router-dom';









function App() {
  const [mode, setMode]  = useState('light')
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }


const removecolor = ()=>{
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-danger')
}

  const toggleMode = (cls)=>{
    removecolor()
    document.body.classList.add('bg-'+cls)
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled","success");
      document.title = "Vivek App Dark Mode"
      
    }else{
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled","success");
      document.title = "Vivek app Light Mode"

    }
  }
  return (
    <>
<BrowserRouter>
{/* //yaha pe sab kuch show ho ga */}
  <Navbar title="Eco " About= "About" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
<Routes>
{/* { <Route path='/' element={<Navbar title="Eco " About= "About" mode={mode} toggleMode={toggleMode}  />}> </Route> } */}
{ <Route exact path='/about'element={<About/>}></Route> }
<Route exact path='/textfrom'element={<TextForm heading="Try TextUtils- Word Counter, Copy The Text And Clear The Text" mode={mode} showAlert={showAlert}/>
 }>

</Route>

</Routes>
</BrowserRouter>




{/* <Navbar title="Eco " About= "About" mode={mode} toggleMode={toggleMode} />

<Alert alert={alert}/>

<div className="container my-3">
<TextForm heading="Enter The Text To Analayiz" mode={mode} showAlert={showAlert}/>
  <About/>
</div> */}



    </>

  );
}

export default App;
