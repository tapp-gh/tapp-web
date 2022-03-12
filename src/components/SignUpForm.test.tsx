import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter as Router} from  'react-router-dom'; 
import SignUpForm from './SignUpForm';


describe('form', ()=>{
    test('form renders properly',()=>{        
        render(
        <Router>
            <SignUpForm/>
        </Router>)

        const namePlaceHolder = screen.getByPlaceholderText('Full Name')
        const emailPlaceHolder = screen.getByPlaceholderText('Email')
        const passwordPlaceHolder = screen.getByPlaceholderText('Password')
        const confirmPasswordPlaceHolder = screen.getByPlaceholderText('Confirm password')

        expect(namePlaceHolder).toBeInTheDocument()
        expect(emailPlaceHolder).toBeInTheDocument()
        expect(passwordPlaceHolder).toBeInTheDocument()
        expect(confirmPasswordPlaceHolder).toBeInTheDocument()
    })
    test('enable button when fields are entered',()=>{
         render(
         <Router>
             <SignUpForm/>
         </Router>
         )

        const namePlaceHolder = screen.getByPlaceholderText('Full Name')
        const emailPlaceHolder = screen.getByPlaceholderText('Email')
        const passwordPlaceHolder = screen.getByPlaceholderText('Password')
        const confirmPasswordInput = screen.getByPlaceholderText('Confirm password')

        // const button = screen.getByTestId('signup')
        const button = screen.getByRole('button', {name: /SIGN UP/i})


        userEvent.type(emailPlaceHolder,'test@email.com')
        userEvent.type(namePlaceHolder,'test')
        userEvent.type(passwordPlaceHolder,'Test1234')
        userEvent.type(confirmPasswordInput,'Test1234')

        expect(button).toBeEnabled()
    })
    test('Password should be equal to confirm Password',()=>{
        render(
            <Router>
                <SignUpForm/>
            </Router>
              )
            const passowrdPlaceHolder = screen.getByPlaceholderText('Password') as HTMLInputElement
            const confirmPasswordPlaceHolder = screen.getByPlaceholderText('Confirm password') as HTMLInputElement

            fireEvent.change(passowrdPlaceHolder, { target : {value :'s3cret'}})
            fireEvent.change(confirmPasswordPlaceHolder, { target : {value :'s3cret'}})

            expect(passowrdPlaceHolder.value).toBe(confirmPasswordPlaceHolder.value)
    })
})