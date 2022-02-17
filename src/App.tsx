import React from 'react'
// import 'tailwindcss'
import {BrowserRouter as Router,Routes,Route} from  'react-router-dom'; 
import SingUp from './pages/SingUp';
import LogIn from './pages/LogIn';



const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={<SingUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App