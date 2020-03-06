# RESTCodingChallenge
Questions (choose only one to answer):
Vertical Timeline Built With React and Hooks
1. Create a web app that takes a collection of date strings in YYYY-MM-DD format (e.g. '2019-01-23') and orders those dates chronologically on a linear axis that is displayed to the user. Because the axis is linear, the further apart dates are chronologically, the further apart they should be spaced on your timeline axis. It is especially good to deal with how to display the dates on your timeline axis when the date labels are so close together that they run into one another.

2. Create a RESTful service whose controller layer has three endpoints:

getASum(x, y): take two integers from the client, add them together, store the result in a database, and return the result to the client.

getAProduct(a): take an integer a from the client, multiply it by 2, store the result in a database, and return the result to the client.

getAPower(s): take an integer s from the client, take s to the 2nd power (s^2), store the result in a database, and return the result to the client.

These can be stored in the same or in separate tables in the database.

Then from a web app, create code that calls getASum() with any two numbers, then takes the result from getASum() and calls getAProduct() with the result, and then takes the result from getAProduct() and calls getAPower() with it.

The final result should be displayed in the browser.

For example, if x = 2 and y = 3, then getASum(2, 3) should return 5. getAProduct(5) should return 10. getAPower(10) should return 100. The final result displayed in the browser should be 100.

3. Create an app that takes as input any webpage containing links to publicly traded companies (e.g. Google, Facebook, Microsoft, etc.). Your app should output the same webpage with all of its content intact, but with this key difference: each of the links to the publicly traded companies should be replaced with its stock ticker symbol (e.g. GOOGL, FB, MSFT, etc.). The hyperlinks should still work like they did in the original web page.

This should work for any publicly traded company and any webpage that gets passed in.