import React from 'react';
import ReactDOM from 'react-dom';
// import { Link, useHistory } from 'react-router-dom';
// import { render, screen } from '@testing-library/react';
import MainWindow from '../app/MainWindow';
// import{ BrowserRouter } from'react-router-dom';
// import { unmountComponentAtNode } from "react-dom";



// import {render, fireEvent, screen} from '@testing-library/react'

// test('loads items eventually', async () => {
//   render(<MainWindow />)

//   // Click button
//   fireEvent.click(screen.getByText('Load'))

//   // Wait for page to update with query text
//   const items = await screen.findAllByText(/Item #[0-9]: /)
//   expect(items).toHaveLength(10)
// })

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainWindow></MainWindow>, div)
})


// describe('main window renders', () => {
//   beforeEach(() => {
//     render(<BrowserRouter><MainWindow /></BrowserRouter>)
//   })
//   it('renders a link to the page', () => {
//     expect(screen.getAllByRole('link')).toHaveLength(1);
//   });
// });