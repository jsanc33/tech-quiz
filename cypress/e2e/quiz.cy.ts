describe("Quiz Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should start my quiz & display my first question", () => {
    cy.get("button").contains("Start Quiz").click();
    cy.get(".card").should("be.visible");
    cy.get("h2").should("not.be.empty");
  });

  it("should answer my questions & complete my quiz", () => {
    cy.get("button").contains("Start Quiz").click();
    for (let i = 0; i < 10; i++) {
      cy.get("button").contains("1").click();
    }
    cy.get(".alert-success").should("be.visible").and("contain", "Your score");
  });

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
