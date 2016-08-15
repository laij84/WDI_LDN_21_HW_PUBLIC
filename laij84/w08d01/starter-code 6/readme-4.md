---
title: NoSQL Animal Shelter
type: lesson
duration: "1:25"
creator:
    name: Ollie Holden
    city: London
competencies: Programming, Server Applications
---

# NoSQL Animal Shelter

### Objectives
*After this lesson, students will be able to:*

- Practise using embedded subdocuments
- Practise using referenced subdocuments
- Practise mongoose queries

### Preparation
*Before this lesson, students should already be able to:*

- Must have a basic understanding of NoSQL
- Must have a basic understanding of TDD

```
            /^--^\ mrf /^--^\     /^--^\
       prrr \____/     \____/     \____/ meow
           /      \   /      \   /      \  mrf
          |        | |        | |        |
           \__  __/   \__  __/   \__  __/
|^|^|^|^|^|^|^\ \^|^|^|^/ /^|^|^|^|^\ \^|^|^|^|^|^|^|
| | | | | | | |\ \| | |/ /| | | | | | \ \ | | | | | |
##############/ /######\ \###########/ /############|
| | | | | | | \/| | | | \/| | | | | |\/ | | | | | | |
|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
```

# Animal Shelter

_"Who let this mongoose in here?"_

## Introduction

Congratulations! Your Ruby animal shelter was such a hit that you've convinced your investors to let you open up a new branch. You have to use what technology is available to you at this new site, which in this case is the MN stack - no vowels allowed here. Much like last time, you need to create a command-line menu that allows you to keep track of all the animals and clients coming in and out of your shelter. We know it's not a long time but your investors have insisted that your new animal shelter opens at 9am tomorrow morning.

## Exercise

### Part 1

You'll need to build the schemas for `Shelter`, `Client` and `Animal`.

#### a. Create a shelter
- A shelter should have the following fields:
	- Name
	- Animals
	- Clients

>**Note:** Animals and clients should be _embedded_ within the Shelter schema.

#### b. Create a client

- You must be able to register new clients at the shelter. Make sure you have:
	- Name
	- Date of birth
	- Gender _(either `male` or `female` cough... Enum)_

#### c. Create an animal

- Animals being dropped off to the shelter will need the following details:
	- Name
	- Date of birth 
	- Type
	- Breed 
	- Status _(either `adopted` or `orphaned` cough... Enum)_
	- Owner

>**Note:** The animal's owner should _reference_ the Client schema.

#### d. Test them!

Now you've built the schemas, run the test file using the command `node test`. If the test throws an error, take another look at your schemas. Keep working on them until they've passed the test.

>**Note:** Bear in mind that every time you run the test file, your db collections will be dropped. 


### Part 2

In order to get this shelter open before 9am, you'll need to get it up and running this evening, ready to welcome new clients through the doors.

The test file will drop your collections every time it's run, so create an `app.js` file for all your animal shelter queries. 

You'll need to:

- Make a shelter
- Add six animals to the shelter
	- 2 dogs
	- 2 cats (at least 1 should be younger than 3)
	- 1 parrot
	- 1 mongoose
- Add two clients to the shelter
- Add two animals to each client

#### Bonus

In the `app.js` file, use some query methods to find and update the data in the database:

- Get all the dogs from the shelter
- Get all the cats under 3 years old
- Change the parrot's name to "Chuckles"
- Delete the mongoose
- Get all orphaned animals in order from eldest to youngest
- Get all the dogs and cats in name order

### Useful reading:

- [Mongo shell methods](https://docs.mongodb.org/manual/reference/method/)
- [More Mongo shell methods](https://docs.mongodb.org/getting-started/shell/query/)
- [Query operators](https://docs.mongodb.org/manual/reference/operator/query/)