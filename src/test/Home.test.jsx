import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home'; // Update this path to match your project structure

// Mock the logo import with default export
vi.mock('../assets/logo.png', () => ({
    default: 'mocked-logo.png'
}));

// Helper function to render the component with Router
const renderWithRouter = (component) => {
    return render(
        <BrowserRouter>
        {component}
        </BrowserRouter>
    );
};

describe('Home Component', () => {
    it('renders the main heading and call-to-action button', () => {
        renderWithRouter(<Home />);
        
        // Check if the main heading text exists
        const heading = screen.getByText('Your guided path to programming enlightnment');
        expect(heading).toBeInTheDocument();
        
        // Check if the CTA button exists and has correct text
        const ctaButton = screen.getByText('BEGIN JOURNEY');
        expect(ctaButton).toBeInTheDocument();
        
        // Verify the button links to the correct route
        expect(ctaButton.closest('a')).toHaveAttribute('href', '/quiz-gen');
    });

        it('renders all three feature sections with correct headings', () => {
        renderWithRouter(<Home />);
        
        // Check if all three feature headings exist
        const personalized = screen.getByText('Personalized Quizzes');
        const rewarding = screen.getByText('Rewarding');
        const personal = screen.getByText('Personal SME');
        
        expect(personalized).toBeInTheDocument();
        expect(rewarding).toBeInTheDocument();
        expect(personal).toBeInTheDocument();
        
        // Verify that the feature descriptions exist
        expect(screen.getByText(/Greetings, young padawan/)).toBeInTheDocument();
        expect(screen.getByText(/Our app is designed to be both challenging and rewarding/)).toBeInTheDocument();
        expect(screen.getByText(/Welcome to the path of knowledge/)).toBeInTheDocument();
        
        // Check that we have the correct number of feature icons (material-icons spans)
        const iconElements = document.querySelectorAll('.material-icons');
        expect(iconElements.length).toBe(3);
    });
});