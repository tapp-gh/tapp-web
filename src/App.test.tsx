import React from 'react';
import { render,screen} from '@testing-library/react';
import SignUpForm from './components/SignUpForm';
import {BrowserRouter as Router} from  'react-router-dom'; 


test('renders sign-up', () => {
  render(<Router>
    
    <SignUpForm />

  </Router>);
   const signUp = screen.getByText(/sign up/i)
  expect(signUp).toBeInTheDocument();
})
