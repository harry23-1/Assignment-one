class YouTubeVideoPage {
    verifyUrl(expectedUrl) {
      cy.url().should('include', '/watch?v=');
      if (expectedUrl) {
        cy.url().should('eq', expectedUrl);
      }
      return this;
    }
  
    clickRandomRecommendedVideo() {
      cy.get('ytd-compact-video-renderer', { timeout: 15000 })
        .should('have.length.greaterThan', 5)
        .then(($videos) => {
          const randomIndex = Math.floor(Math.random() * 5);
          cy.wrap($videos[randomIndex])
            .find('#video-title')
            .invoke('text')
            .as('randomVideoTitle');
          cy.wrap($videos[randomIndex]).click();
        });
      return this;
    }
  
    verifyVideoTitle(expectedTitle) {
      cy.get('h1.title yt-formatted-string', { timeout: 15000 })
        .invoke('text')
        .should('eq', expectedTitle);
      return this;
    }
  }
  
  export default new YouTubeVideoPage();