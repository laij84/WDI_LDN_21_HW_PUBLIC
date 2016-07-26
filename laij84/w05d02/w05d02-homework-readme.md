#ActiveRecord Relationships Lab Homework

##Requirements
- Read back over todays lesson notes
- Build on the app that you've been creating today in class
- Add a fourth model for 'comments' along with associations
- Use tux to test your relationships as you go.
 
##Instructions
Your task is to build on your current app that you've been making in class today by adding a fourth model for comments. The model should have the following fields:

- Text (text)
- Rating (integer)

And the following associations:

- A recipe has many comments
- A comment belongs to a recipe
- A course has many comments through recipes

##Deliverable

Create the desired migrations in order to add to your database structure.

You should be able to run the following commands in tux:

```
 # create a new comment in tux
comment1 = Comment.create text: "This was blooming delicious.", rating: 5

 # associate it with a recipe
recipe1.comments << comment1
 
 # test the belongs to relationship
recipe1.comments 

 # test the many-through relationship
course1.comments
