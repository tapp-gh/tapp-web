import React from 'react'
import {BrowserRouter as Router,Routes,Route} from  'react-router-dom'; 
import Tweets from './pages/Tweets';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/tweets" element={<Tweets />} />
          {/* <Route path='/' element={<SingUp/>}/>
          <Route path='/login' element={<LogIn/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App