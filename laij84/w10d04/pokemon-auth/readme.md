# Angular PokéApp

## Task

We're going to build out an authenticated Pokémon App in angular.

You have been provided with an API which will run on port 3000.

Firstly, `npm i` and `node db/seeds` to set up the api, then launch it with `nodemon`.

Using `insomnia` register and manually set the token you receive in the headers tab. Test out the API, making CRUD requests to the `/api/pokemon` endpoint.

Once you are happy that the API is working, start setting up your frontend angular app.

### The frontend

You will notice that the frontend is practically empty. You should spend this lab creating your `Pokemon` and `User` models and setting up `ui-router` so that you have the neccessary `states`, templates, and matching controllers.

You will need the following states:

- `home`
- `pokemon`
- `register`
- `login`

The templates for `home` and `pokemon` for now can just contain a `h1` tag with a title.

Add a navbar so that you can easily navigate between states.

> **Note:** You should not make any requests to the API from your angular app for this lab. Your only concern should be to set up the router, controllers, models and templates.