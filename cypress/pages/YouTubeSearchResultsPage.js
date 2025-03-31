class YouTubeSearchResultsPage {
    clickFirstVideo() {
      cy.get('ytd-video-renderer #video-title')
        .first()
        .invoke('text')
        .as('firstVideoTitle');
      
      cy.get('ytd-video-renderer #thumbnail')
        .first()
        .click();
      
      cy.url().as('firstVideoUrl');
      
      return this;
    }
  }
  
  export default new YouTubeSearchResultsPage();