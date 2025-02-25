describe("language", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("button is visible", () => {
    cy.get('[data-testid="lang-switch"]').should("be.visible");
  })

  describe("is stored in local storage correctly", () => {
    it("lang is en on initial visit", () => {
      cy.window().should((win) => {
        expect(win.localStorage.getItem("lang")).to.equal('"en"');
      });
    })

    it("lang is tr when button is clicked", () => {
      cy.switchLanguage()
      cy.window().should((win) => {
        expect(win.localStorage.getItem("lang")).to.equal('"tr"');
      });
    })
  })

  describe("renders translations correctly", () => {
    it("button label is turkish on en mode", () => {
      cy.get('[data-testid="lang-switch"]').should("contain", "Türkçe");
    })

    it("button label is english on tr mode", () => {
      cy.switchLanguage()
      cy.get('[data-testid="lang-switch"]').should("contain", "English");
    })

    it("title is turkish on tr mode", () => {
      cy.switchLanguage()
      cy.get('[data-testid="hero-title"]').should("contain", "Yaratıcı düşünen, minimalist biri");
    })

    it("title is english on en mode", () => {
      cy.get('[data-testid="hero-title"]').should("contain", "Creative thinker Minimalism lover");
    })
  })

  it("language switch shows toast correctly", () => {
    cy.switchLanguage();
    cy.wait(1000)
    cy.contains("Dil başarıyla güncellendi").should("be.visible");
    cy.switchLanguage();
    cy.wait(1000)
    cy.contains("Language updated successfully").should("be.visible");
  })
})