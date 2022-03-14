import React from 'react';
import { render,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter as Router} from  'react-router-dom'; 
import LogInForm from './LogInForm';


describe('LogIn form',()=>{

    test('enable button when fields are entered',()=>{
         render(
             <Router>
                 <LogInForm/>
             </Router>
         )
         const emailPlaceHolder = screen.getByPlaceholderText('Email')
         const passowordPlaceHolder = screen.getByPlaceholderText('Password')

        userEvent.type(emailPlaceHolder,'test@email.com')
        userEvent.type(passowordPlaceHolder,'Test1234')
        
        const button = screen.getByRole('button', {name: /LOG IN/i})
       
        expect(button).toBeEnabled()

    })
   
    test('rendering and submiting the login form', async ()=>{
        render(
            <Router>
            <LogInForm/>
        </Router>
    )

    const emailPlaceHolder = screen.getByPlaceholderText('Email')
    const passowordPlaceHolder = screen.getByPlaceholderText('Password')

    expect(emailPlaceHolder).toBeInTheDocument()
    expect(passowordPlaceHolder).toBeInTheDocument()
    
    userEvent.type(emailPlaceHolder,'test@email.com')
    userEvent.type(passowordPlaceHolder,'Test1234')
    
})

})