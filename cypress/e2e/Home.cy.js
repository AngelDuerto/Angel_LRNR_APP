describe("Home Page Tests", () => {
  beforeEach(() => {
    cy.visit("/"); // Visit the homepage before each test
  });

  it("should load the homepage correctly", () => {
    // Verify the presence of the main heading
    cy.contains("Your guided path to programming enlightnment").should("be.visible");
    // Check if the logo image is loaded correctly
    cy.get("img").should("have.attr", "src").and("include", "logo");
  });

  it("should display the 'BEGIN JOURNEY' button", () => {
    // Ensure the button is visible
    cy.contains("BEGIN JOURNEY").should("be.visible");
    // Verify the button has the correct class for styling
    cy.contains("BEGIN JOURNEY").should("have.class", "btn-large");
  });

  it("should display all feature sections", () => {
    // Ensure key feature sections are visible on the homepage
    cy.contains("Personalized Quizzes").should("be.visible");
    cy.contains("Rewarding").should("be.visible");
    cy.contains("Personal SME").should("be.visible");
  });

  it("should navigate to /quiz-gen when 'BEGIN JOURNEY' is clicked", () => {
    // Click the 'BEGIN JOURNEY' button and check that the URL updates correctly
    cy.contains("BEGIN JOURNEY").click();
    cy.url().should("include", "/quiz-gen");
  });
});

//4 tests passed (4 total)