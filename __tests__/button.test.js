// Button.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../components/Button';

test('renders a button with the provided label', () => {
	render(<Button label="Click me" />);
	const buttonElement = screen.getByText(/Click me/i);
	expect(buttonElement).toBeInTheDocument();
});
