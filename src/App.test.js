import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has initial color', () => {
render(<App/>)
    const button = screen.getByRole('button', {name:'Change to red'})
    expect(button).toHaveClass('blue')
});

test('button turns blue when clicked', () => {
    render(<App/>)
    const button = screen.getByRole('button', {name:'Change to red'})
    fireEvent.click(button)
    expect(button).toHaveClass('red')
    expect(button).toHaveTextContent('Change to blue')
});

test('by default button is enabled and checkbox is checked', () => {
    render(<App/>)
    const button = screen.getByRole('button', {name:'Change to red'})
    const checkbox = screen.getByRole('checkbox')

    expect(button).toBeEnabled()
    expect(checkbox).not.toBeChecked()
});

test('checkbox disables on first click and enables on second click',
    () => {
        render(<App/>)
        const button = screen.getByRole('button', {name: 'Change to red'})
        const checkbox = screen.getByRole('checkbox', {name:'Toggle Button'})
        fireEvent.click(checkbox)
        expect(button).toHaveTextContent('Change to red')
        expect(checkbox).toBeChecked()
        expect(button).toBeDisabled()
        fireEvent.click(checkbox)
        expect(button).toBeEnabled()
        expect(checkbox).not.toBeChecked()
    });

test('test css',
    () => {
        render(<App/>)
        const button = screen.getByRole('button', {name: 'Change to red'})
        const checkbox = screen.getByRole('checkbox', {name:'Toggle Button'})
        fireEvent.click(checkbox)
        expect(button).toHaveAttribute('disabled')
        expect(checkbox).toBeChecked()
        expect(button).toBeDisabled()
        fireEvent.click(checkbox)
        expect(button).toBeEnabled()
        expect(checkbox).not.toBeChecked()
        expect(button).toHaveClass('blue')
        fireEvent.click(button)
        expect(button).toHaveClass('red')
        expect(button).toHaveTextContent('Change to blue')
    });