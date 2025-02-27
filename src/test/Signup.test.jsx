import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Signup from "../pages/Signup"; // Adjust the import path as needed
import { UserContext } from "../context/UserProvider"; // Import the UserContext

// Mock useNavigate to prevent actual navigation during tests
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
            ...actual,
            useNavigate: () => vi.fn(), // Mock useNavigate
    };
    });

    describe("Signup Component", () => {
    it("renders the 'Create Account' button and triggers the form submission", () => {
        // Mock values for UserContext to simulate a logged-out user
        const mockUser = null; // Simulate no user logged in
        const mockSetUser = vi.fn(); // Mock setUser function

        // Render the Signup component within a MemoryRouter and UserContext.Provider
        render(
            <MemoryRouter>
                <UserContext.Provider value={{ user: mockUser, setUser: mockSetUser }}>
                <Signup />
                </UserContext.Provider>
            </MemoryRouter>
        );

        // Find the "Create Account" button
        const createAccountButton = screen.getByText("Create Account");

        // Verify that the button exists
        expect(createAccountButton).toBeInTheDocument();

        // Simulate a click event on the button
        fireEvent.click(createAccountButton);
    });
});

// 1 test passed (1 total)