import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUpForm from './SignUpForm';


describe('form', ()=>{
    test('form renders properly',()=>{

        render(<SignUpForm/>)

        const namePlaceHolder = screen.getByPlaceholderText('Full Name')
        const emailPlaceHolder = screen.getByPlaceholderText('Email')
        const passwordPlaceHolder = screen.getByPlaceholderText('Password')
        const confirmPasswordPlaceHolder = screen.getByPlaceholderText('Confirm Password')

        expect(namePlaceHolder).toBeInTheDocument()
        expect(emailPlaceHolder).toBeInTheDocument()
        expect(passwordPlaceHolder).toBeInTheDocument()
        expect(confirmPasswordPlaceHolder).toBeInTheDocument()

    })


    test('enable button when fields are empty',()=>{

         render(<SignUpForm/>)

        const namePlaceHolder = screen.getByPlaceholderText('Full Name')
        const emailPlaceHolder = screen.getByPlaceholderText('Email')
        const passwordPlaceHolder = screen.getByPlaceholderText('Password')
        const confirmPasswordInput = screen.getByPlaceholderText('Confirm Password')

        userEvent.type(emailPlaceHolder,'test@email.com')
        userEvent.type(namePlaceHolder,'test')
        userEvent.type(passwordPlaceHolder,'Test1234')
        userEvent.type(confirmPasswordInput,'Test1234')
        const button = screen.getByRole('button',{name: 'Sign Up'})

        expect(button).toBeEnabled()
    })
})