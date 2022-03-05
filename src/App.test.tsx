// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import SignUp from './pages/SignUp'
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

// const App = require('./App')

jest.mock('./pages/LogIn');
jest.mock('./pages/SignUp');


// 
// describe('Test fro App Router', ()=>{
//   test('should render SignUp page on default route',()=>{

//     // Arrange
//     SignUp.mockImplementation(() => <div>PageHeaderMock</div>);
//   })
// })

