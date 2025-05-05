describe("Quiz Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  //test to see if quiz starts and displays first question
  it("should start my quiz & display my first question", () => {
    cy.get("button").contains("Start Quiz").click();
    cy.get(".card").should("be.visible");
    cy.get("h2").should("not.be.empty");
  });
  //test to see if quiz answers questions and completes quiz
  it("should answer my questions & complete my quiz", () => {
    cy.get("button").contains("Start Quiz").click();
    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").click();
    }
    cy.get(".alert-success").should("be.visible").and("contain", "Your score");
  });
  //test to see if quiz restarts when game is done
  it("should restart my quiz when the game is done", () => {
    cy.get("button").contains("Start Quiz").click();
    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").click();
    }
    cy.get("button").contains("Take New Quiz").click();
    cy.get(".card").should("be.visible");
    cy.get("h2").should("not.be.empty");
  });
});
