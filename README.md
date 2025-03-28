# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > Kids.js contains the code that executes when the name is clicked on in the browser. 

   > We are using the method of addEventListener to monitor the DOM and when the targeted element we declared is clicked, that is when the code is executed. 
   

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?

   > The  findCelebrityMatch() function must be invoked in the for of loop because we are iterating through the array of children objects. 
   
   >Each  child object has a property of celebrityId that corresponds to the id property of each celebrity object.
   
   >So, we use the findCelebrityMatch function in the for.. of loop to iterate through the array of childObject and to check if it is true that their property of celebrityId matches the id of the celebrity.id 

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   
   > Yes. Boom, question answered.











   > Just kidding, we are using our event listener method to listen to the dom and waiting for a user to click the element we targeted.
   
   > In this case, it is the data-type of "celebrity" we specified in our Celebrities function that renders the HTML.

   >  When the specific element("celebrity") we singled out on the dom is clicked,  a for of  loop executes that iterates through all of celebrities objects

   > Our if condition checks to see if variable of celebrityId and celebrity.id match
   
   > if they match (meaning the condition is true), a window alert will execute that contains which has the value of data.sport  which we targeted by creating a variable that has the value of the clickevent target and uses dot notation to pull the data attribution of data-sport


4. Can you describe, in detail, the algorithm that is in the `main` module?
   > We want to render HTML dynamically to our DOM, so we declare the variable of mainContainer which has the value of the document.querySelector method that is selecting the id of container in our index.html document

   > Our entire index.HTML body has the id of container, so our main. js will insert our dynamically generated html code on page load

   >our main.js module invokes our Kids(), Celebrities(), and Pairings() functions that will will iterate through the specified arrays of objects, and insert the appropriate values and return the html
