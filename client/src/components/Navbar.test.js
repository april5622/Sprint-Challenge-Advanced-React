import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Navbar";

test('renders toggle components', () => {
    const { getByTestId } = render(<Navbar />);
    const toggle = getByTestId(/toggle/i);
    expect(toggle).toBeInTheDocument();
  })

// describe('Toggle Button', () => {
//     it('calls "onClick" prop on toggle button', () => {
//       const onClick = jest.fn();
//       const { getByTestId } = render(
//         <Navbar onClick={onClick}
//         />
//       );
//       expect(onClick).not.toHaveBeenCalled();
//       fireEvent.click(getByTestId(/toggle/i));
//       expect(onClick).toHaveBeenCalled();
//     });
//   });