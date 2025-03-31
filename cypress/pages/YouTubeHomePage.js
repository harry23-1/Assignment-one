class YouTubeHomePage {
    visit() {
      cy.visit('https://www.youtube.com');
      return this;
    }
  
    acceptCookies() {
      cy.get('button').contains('Accept all').click({ timeout: 10000 }).should('not.exist');
      return this;
    }
  
    searchFor(term) {
      cy.get('.ytSearchboxComponentInput').type(term, '{Enter}');
      cy.get('.ytSearchboxComponentSearchButton').click({ force: true });
      return this;
    }
  
    verifySearchResults() {
      cy.get('ytd-video-renderer', { timeout: 15000 }).should('have.length.greaterThan', 0);
      return this;
    }
  }
  
  export default new YouTubeHomePage();