import React from 'react';
import { render,screen} from '@testing-library/react';
// import App from './App';
import SignUpForm from './components/SignUpForm';
import {BrowserRouter as Router,Routes,Route} from  'react-router-dom'; 



// jest.mock('./sign-up',()=> <div data-testid='sign-up'/>)
// jest.mock('./log-in',()=> <div data-testid='log-in'/>)
//are you here

// Yes I am....wrap the app.test.tsx...with Browser router,routes,route...like you did on App.tsx
//do you understand?
// Yes I think so..good---i have imported them...so do the wrapping lets see
// just wrap the Router...try the test
//  I was contemplating whether it was suppose to be inthe render or a new code block altogther... 
//  but I think the passed. it is just one test failing now
// one of them is passing? now?...so it means wrapping the Router worked or?
// Yeah i think so...do you understand why is working now?...this is a implementation of contexts
// I am not very familiar with contexts but I saw it when i researching on how to do this. 
// but from the routing point of view i understand why just using the signUpform did not not and this is worked
//me personally i havent written tests for a react app before..lol
// that is surprising considering how fast you came up with this but I understand. it comes with the experience.lol
// but do you think that is all the test i need to write for the app.tsx ?


test('renders sign-up', () => {
  render(<Router>
    <SignUpForm />
  </Router>);
   const signUp = screen.getByText(/sign up/i)
  expect(signUp).toBeInTheDocument();
})
