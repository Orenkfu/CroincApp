# CroincApp
A simple Ionic demo for viewing a user's repos in github.

## Features

* Search for a user in GitHub to view their repositories (exact username, case insensitive).
* Click on the repository to view it's README file.
* Built in Ionic as a hybrid website/mobile app.

Built using the tutorial on [gonehybrid.com](https://gonehybrid.com/build-your-first-mobile-app-with-ionic-2-angular-2)

Fixes to issues in the tutoria:

* Property binding [innerHTML] to a <ionic-content> component does not work as specified in the tutorial. 
Throws: Uncaught TypeError: Cannot read property 'offsetHeight' of null

Solution: bind the innerHTML to a div nested in the ionic-content.

* Using angular 4.3's HttpClient module will cause an issue with sending a request for text, as the text() function does not exist on the response object.

Solution: attach ```javascript { responseType: text } ``` requestoption to indicate you're expecting a text-based response body.
