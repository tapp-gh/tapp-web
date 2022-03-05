import React from 'react'
import {BrowserRouter as Router,Routes,Route} from  'react-router-dom'; 
import SingUp from './pages/SignUp';
import LogIn from './pages/LogIn';



const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
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