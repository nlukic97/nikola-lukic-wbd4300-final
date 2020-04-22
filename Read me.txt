# George Daniels Consulting
- Author: Nikola Lukic
- Date: 22. April 2020
-  University: SAE Institute, Belgrade

# General Information
The idea behind the website is a landing page for a marketing consulting company - a page with not too much content - the main goal is to get users to schedule a call. The website is an attempt at making a responsive html, css and javascript website whilst implementic an API, using animated vector images and retouching an image and displaying the comparison.

# Contents
- 2 html pages
- 1 css styling page
- 1 javascript page
- fontello symbols font (in 'font' file)
- 2 svg images
- 5 other images, two of which are before and after retouching:
- - img/woman-original.jpg
- - img/woman-retouched.jpg
- 

### External Imports
- jquery via link
- bootstrap via link
----
# index.html
#### 1. Navigation bar 
- fixed and responsive with bootstrap. It creates a hamburger menu on smaller screens. When clicking an a menu item which is on the same page, the website will scroll down to this section using the scroll-behavior:smooth; css setting.
- ###### additional 
- - in the end, code was added so that upon clicking an open hamburger menu, the hamburger menu closes and the website slides to the necessary section of the webpage
#### 2. First section
- contains a hero image allong with a call to action. It also contains a title in the top left corner. When the screen resizes, it goes to the bottom left corner. On very small screens, dissapears.
- hero image. HeroO.jpg
- 
#### 3. Gallery
- automatic slider. When a user clicks on any button, it stops the automatic slider and from there the images will slide only when the 'next' or 'prev' buttons are pressed
- two of the images in this slider are the original vs retouched version, as requested in the assignment.

#### 4. Schedule a call
- Five areas which are validated when 'submit' is clicked
- - Name and Last Name > must be entered, between from 3 to 12 characters, no @ signs permited, and must not be a number
- - Email > must be entered and must contain '@'
- - Telephone > must be entered, and must a number. 345 or +345  will also be accepted.
- - Date > must be entered fully.

- If any of these are not completed as necessary when 'submit' is clicked, the specific warning message shall appear in red right under each input section where the error was found.


#### 5. Footer
- contains social media widgets, a newsletter subscription form, and in the middle a an animated svg (inserted as code in the footer page) with text underneath saying ' We have a solution'. 
- responsive - when resized to a small screen size, the footer version for desktop screens is set to display:none;, and the mobile optimized footer is displayed. This is due to the social media widgets being put at the bottom of the page rather than at the top. In the mobile version, the svg animation is removed.
----
# page2.html
#### 1.Navigation bar
- previously described in index.html
#### 2. Currency Converter
- This currency converter is made out of two inputs, one for a number to be entered, and another only to display final conversion results. The user inputs an amount and selects one of the available currencies he or he wants to convert. Then they select the currency they want to convert to. 
- When they click "convert", the result is printed in the checkbox and as two h3 elements above the first input box right after the heading. 
- The button initially validates all the forms. It checks if the same currency has been entered, if so it will ask for two different ones to be entered. The validation also checks the input box for a value, and that that value is a number.If all conditions are met, the conversion happens, and the amounts of currency 1 and currency 2 are displayed in the h3 elements. And the currency 2 amount is printed in the second input box.
#### 3. footer
- previously described in index.html
---
## additional info
### javascript API 
- the api has three variables. 
- - currency1 is the first select currency which we want to convert from. This information affects the link we will retrieve the API information from, specifically the currency base for which specific rates will be returned.
- - A list of currencies is retrieved with the API. Based on the selection of the variable currency2, this amount for this currency is retrieved.
- -  - currency1 : currency2 = 1 : certain amount of currency2
- the third variable, amount1 , is a number multiplied with the response for currency2. This is later printed as previously described. (1 euro is 0.78 GBP. So 5 euros in GBP ? 5 * 0.78)

. 


