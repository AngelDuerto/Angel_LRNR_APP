import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ResultsPage from "../pages/Results";

// Mock useLocation to provide state data
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useLocation: () => ({
      state: {
        correctCount: 3, // Simulate a scenario where the user got 3 correct answers
        totalQuestions: 5, // Total number of questions in the quiz
        userAnswers: [
          {
            question: "What is 2 + 2?",
            userAnswer: "4",
            correctAnswer: "4",
            isCorrect: true, // Indicate that the user's answer was correct
          },
        ],
      },
    }),
  };
});

describe("ResultsPage Component", () => {
  it("displays the correct score summary", () => {
    // Render the ResultsPage component within a MemoryRouter to simulate routing behavior
    render(
      <MemoryRouter>
        <ResultsPage />
      </MemoryRouter>
    );

      // Check if the score summary is displayed correctly
    expect(screen.getByText("Questions Right: 3 / 5")).toBeInTheDocument();
  });
});

// 1 test passed (1 total)