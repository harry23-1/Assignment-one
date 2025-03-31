Feature: YouTube Video Navigation
  Scenario: Search and navigate through YouTube videos
    Given I navigate to youtube.com
    When I search for "Itonics" in the search bar
    And I click the first video result
    Then I should be on the video's detail page
    When I click a random recommended video
    Then the video title should match the clicked recommendation