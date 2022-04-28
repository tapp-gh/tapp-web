import React from 'react'
import {BrowserRouter as Router,Routes,Route} from  'react-router-dom'; 
import SingUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import PrivateRoutes from './utility/PrivateRoutes';
import Home from './pages/Home';


const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Router>
        <Routes>
          <Route path='/signup' element={<SingUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/home' element={<PrivateRoutes><Home/></PrivateRoutes>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App