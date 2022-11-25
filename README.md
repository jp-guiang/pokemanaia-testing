# Pokemanaia Testing

Pokemanaia (https://pokemanaia.herokuapp.com/) is the final group project that I was involved with, while studying at Dev Academy Aotearoa. This was our teams attempt at gamedev in a week. We chose to make a pokemon based game as it had a lot of learning new tech required to make it work, aswell as a lot of room for stretch and additional features we wanted to add.

The purpose of this personal project is to recreate the Home page feature of the game app, but to have more focus on testing the funcionality of the Home page. 
### What's included

This repo includes:


* multiple React components encompassing the Home page of the game (`<App />, <Home />, < Pokemon/>, <Team />`)
* `< Home />` is the parent component of `< Pokemon/> < Team/>`
* `< Home />` uses api endpoints to get a list of first generation Pokemon and then sends that info to the `<Pokemon/>` component
* `< Pokemon/>` component displays the picture of the Pokemon and it's name
* `< Pokemon/>` when hovering over the Pokemon components the user can see Pokemon stats
* each `< Pokemon/>` component is also a button that saves the Pokemon as one of the users team members into a redux state]
* `<Team />` is a simple component that displays the users current team
* simple API endpoints (`/api/apiClient`)
* configuration for Jest and testing library
* configuration for server-side debugging in VS Code
* a client-side tests for all components
#### **From the Github UI**

See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

#### **From the command line**

```
git clone https://github.com/dev-academy-challenges/boilerplate-fullstack [your-project-name]
cd [your-project-name]
npm install # to install dependencies
npm run dev # to start the dev server
open your browser
find the server running on [http://localhost:3000](http://localhost:3000).
enjoy!

```
### Disclaimer
This app was made with fair use in mind for educational purposes and all rights belong to their respective owners.  
This app is not affiliated, endorsed or supported by Nintendo in any way, some images used in this app are copyrighted and supported under fair use, Pokemon and Pokemon character names are trademarks of Nintendo.
