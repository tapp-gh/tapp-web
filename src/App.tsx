import React from 'react'
import {BrowserRouter as Router,Routes,Route} from  'react-router-dom'; 
import Posts from './pages/Posts';
// jira



const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <Router>
        <Routes>
          <Route path='/posts' element={<Posts/>}/>
          {/* <Route path='/' element={<SingUp/>}/>
          <Route path='/login' element={<LogIn/>}/> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App