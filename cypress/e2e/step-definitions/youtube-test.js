import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import YouTubeHomePage from '../pages/YouTubeHomePage';
import YouTubeSearchResultsPage from '../pages/YouTubeSearchResultsPage';
import YouTubeVideoPage from '../pages/YouTubeVideoPage';
import context from '../support/testContext';

Cypress.on('uncaught:exception', () => false);

Given('I navigate to youtube.com', () => {
  YouTubeHomePage.visit();
  // YouTubeHomePage.acceptCookies(); // Uncomment if needed
});

When('I search for {string} in the search bar', (searchTerm) => {
  YouTubeHomePage
    .searchFor(searchTerm)
    .verifySearchResults();
});

When('I click the first video result', () => {
  YouTubeSearchResultsPage.clickFirstVideo();
});

Then('I should be on the video\'s detail page', () => {
  cy.get('@firstVideoUrl').then(url => {
    YouTubeVideoPage.verifyUrl(url);
  });
});

When('I click a random recommended video', () => {
  YouTubeVideoPage.clickRandomRecommendedVideo();
});

Then('the video title should match the clicked recommendation', () => {
  cy.get('@randomVideoTitle').then(title => {
    YouTubeVideoPage.verifyVideoTitle(title);
  });
});