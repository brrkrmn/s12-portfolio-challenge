describe("theme", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("switch is visible", () => {
    cy.get('[data-testid="theme-switch"]').should("be.visible");
  });

  describe("is stored in local storage correctly", () => {
    it("dark mode is false on initial visit", () => {
      cy.window().should((win) => {
        expect(win.localStorage.getItem("darkMode")).to.equal("false");
      });
    })

    it("dark mode is true after switch is clicked", () => {
      cy.switchTheme()
      cy.window().should((win) => {
        expect(win.localStorage.getItem("darkMode")).to.equal("true");
      });
    })
  })

  describe("updates body class correctly", () => {
    it("body does not have dark class on light mode", () => {
      cy.get("body").should("not.have.class", "dark");
    })

    it("body has dark class on dark mode", () => {
      cy.switchTheme()
      cy.get("body").should("have.class", "dark");
    })
  })

  describe("updates colors correctly", () => {
    it("main background is light in light mode", () => {
      cy.get("body").should("have.css", "background-color").and("eq", "rgb(255, 255, 255)");
    })

    it("main background is dark in dark mode", () => {
      cy.switchTheme()
      cy.get("body").should("have.css", "background-color").and("eq", "rgb(37, 33, 40)");
    })
  })
});