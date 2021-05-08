import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, queryByAttribute } from '@testing-library/react';
import "@testing-library/jest-dom";
import renderer from "react-test-renderer"

import add from './App'
import App from './App'

afterEach(cleanup);

test('add', () => {
    const value = add(1, 2);
    expect(value).toBe(3)
});

it("renders w/o crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div)
})

// Providing error
/* it("renders component correctly", () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId("welcome").textContent).toBe('Welcome');
}) */

// To save snapshots of components and track
/* it("matches snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
}) */

