# foodWS
foodWS stores recipes that have the following field:
* name: name of the recipe
* meal : breakfast, supper or dinner
* time : time to make the recipe
* ingredients : the ingredients you need to make the recipe
  * name: name of the ingredient
  * decription: amount or desription
  * category: category of the ingredient
* directions: how to make the recipe
* serves: how many people the recipe serves
* image: an image of the recipe

## get-recipes
in order to get recipes the url is 
> https://foodws-yonit.herokuapp.com/get-recipes

you can get recipes without recipes that have specific ingredients
in order to get those you need to add the ingredeints parameters which is the ingredients name in capital letter.

for example if I do not want Turkey and Bacon this will be the link:
> https://foodws-yonit.herokuapp.com/get-recipes?ingredients=Turkey&ingredients=Bacon

you can get recipes without specific recipes
in order to get those you need to add the blockedRecipes parameters which is the recipe name.

for example if I do not want "Breakfast Salmon Egg Bake" this will be the link:
> https://foodws-yonit.herokuapp.com/get-recipes?blockedRecipes=Breakfast%20Salmon%20Egg%20Bake

##get-ingredients

the WS can send all the ingredients that in all of the recipes ordered by their category.

to get the ingredeints all you have to do is acces the following url:
> https://foodws-yonit.herokuapp.com/ingredients

the response will be JSON file with an array of categories objects. each category will have an array of ingredients and an _id
