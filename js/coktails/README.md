The task should take a maximoum of 2 hours to complete. Please do not spend more time than this.

~ If you make it to the next round, we will continue working on this during a live coding interview. We will expand on the functionality, so please remember to have this project ready for then.

~ We have attached a basic Node.js project to this email which you are welcome to use buy please feel free to complete the task in any another lenguage if you prefer.

~ You can implement the funcionality in any way you wish, using functions, classes, etc. Try yo make you code as redeable and understadable as possible, organisis youy code as you see.

~ Please chreate a repository and push you answers to Github and share the link with us in an email.

TECHNIAL ASSIGNMENT.

At X, you aim is to give everyone easy acces to anything in ther city. As i'm sure you know, we're expers in bringing declicius food to your door. Wouldn't it be great to accompany this food qwith some exotic cocktails? You job is to find some cocktails and look up the ingredients we need to make them so that we can include them ins our app.

✅ 1. Tke a look at the Cocktail DB Public API https://www.thecocktaildb.com/api.php You can see some example queries in the documentation so check it out a bit.

✅ 2. Since we're X, we want to keep our cocktails in the theme with the company. Fetch all cocktails shich have a new beginning with "G". Check the API documentation on how to do this.

✅ 3. Log the names of all the cocktails found as well the number...

✅ 4. Cocktails shoould be extravagant right? Let's just keep the cocktials that have more than 4 ingredients. Log the name for each of the results.

5. The Results are not very easy to read, can toy help us to parse the list so it's a bit easier to read. For each cocktail, we only need the id, name, and an array of theingredients. Log the results.

6. Oooops, we forgot about the ingredients quantities. Update the parsed list but unstead of just saving the ingredeints in the array, save the ingredients as an object with its name and quantity. Log the resuelts.

7. We want t be able to offer our customers both alcoholic and non-alcoholic cocktails. Separate the resuelts into two lists based oon this. Log the results.

8. Great, we're done!

TECHNICAL ASSIGNMENT

In the end, when running your code, you should have a result like this(doesn't have to match exactly, feel free to name the fields differently and/or use arrays/ibjects to contain lists)
...
**Cokctials beginning with G**

total: x

Names: "Cocktail A", "Cocktial B"....

**Cokctials with more than 4 ingredients:**

Gin Sour

Gin Daisy

Gin Sling

**coktials with just id/name/ingredients:**

{name: "cocktail B", id: 472123, ingredients: ["vodka", "apple juice", ....] }

{name: "cocktail D", id: 472123, ingredients: ["gin", "tomatoo juice", ....] }

Cocktails with ingredient quantity

{name: "cocktail B", id: 23423423, ingredients: [{name: "vodka", quantity: "1 oz"}, ]}

....

**Alcoholic:**

{name: "Cocktail B", id: 98312312, ingredients: [{name: "vodka", quantity: "1 oz"} , ....]}

........

Non-Alcoholic:

{name: "Cocktail E", id: 98312312, ingredients: [{name: "lime juice", quantity: "1 oz"} , ....]}
