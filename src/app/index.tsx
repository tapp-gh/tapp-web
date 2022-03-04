import React from 'react'
import {BrowserRouter as Router,Routes,Route} from  'react-router-dom'; 
import Tweets from './pages/Tweets';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Router>
        <Routes>
          <Route path='/posts' element={<Tweets/>}/>
          {/* <Route path='/' element={<SingUp/>}/>
          <Route path='/login' element={<LogIn/>}/> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App