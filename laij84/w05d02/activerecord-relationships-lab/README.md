# ActiveRecord Relationships Lab

## Requirements

Create the following models:

- Recipe
  - title (string)
  - description (text)
  - servings (integer)

- Course
  - name (string) eg: breakfast, lunch, dinner, desert etc.

- Ingredient
  - name (string)

Create the following associations between these models:

- A recipe belongs to a course
- A course has many recipes
- A recipe has many ingredients
- An ingredient has many recipes
- A course has many ingredients **through** recipes
- An ingredient has many courses **through** recipes

Create the desired migrations to set up the required database structure

## Deliverable

Once you've finished, create your database and run your migrations

Using `tux` you should be able to run the following commands:

```
recipe1 = Recipe.create title: "pizza", description: "some crust and some toppings", servings: 4
recipe2 = Recipe.create title: "pasta", description: "tastier with bolognese", servings: 3
ingredient1 = Ingredient.create name: "tomatoes"
ingredient2 = Ingredient.create name: "beef"
course1 = Course.create name: "main"
recipe1.course = course1
recipe1.save
recipe2.course = course1
recipe2.save
course1.reload
course1.recipes #should return an array containing 2 recipes
recipe1.ingredients << i1
recipe1.ingredients << i2
recipe2.ingredients << i1
recipe2.ingredients << i2
ingredient1.reload
ingredient1.recipes # should return 2 recipes
ingredient1.courses # should return 2 courses
```

If you do not get errors running these commands, you're done!

## Additional Resources
[Offical ActiveRecord Associations Documentation](http://guides.rubyonrails.org/association_basics.html)