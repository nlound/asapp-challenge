# ASAPP Front End Challenge - City Picker UI

## User Story

- The user will interact with the City Picker Interface in order to search for a specific city from a list provided by DataHub's Major cities of the world's API: https://datahub.io/core/world-cities.

## How to use

In order to install and run the app, please make sure you've installed:

- [Git](https://git-scm.com/),
- [Node](https://nodejs.org/es/) v10.16.3 or LTS.

### Clone this repository

```bash
$ git clone git@github.com:nlound/asapp-challenge.git
```

#### Go inside the repository and to the API's folder in order to install API's dependencies

```bash
$ cd asapp-challenge
$ cd api
$ npm install
```

### Go back to the main folder, and install FE dependencies

```bash
$ cd ..
$ npm install
```

#### You're now ready to run the app!

```bash
$ npm run all
```

The app will run on [http://localhost:3000](http://localhost:3000).

---

## UX issues and improvements

- There is a the [Autocomplete](https://material-ui.com/components/autocomplete/) component on Material UI that could be implemented on this challenge. However I didn't want an OOTB solution.

- There were so many cities that was impossible to load them all without freezing the browser so I decided to call the api with the input value filtering to a fixed ammount of results.

- Since API was slow there was two options I evaluated to make the /cities call. I could use a debounce on the try catch block on the `handleChange` method on `SearchBar` componet but instead of loading another library (like [Loadash](https://lodash.com/)) I've decided to go that with plain JS using native methods `setTimeout` and `clearTimeout` to achieve a debounce alike behaviour.

- I've taken out the proposed input placeholder outside the component for usability heuristic rule "recognition rather than recall". [Jakob Nielsen's 10 general principles for interaction design](https://www.nngroup.com/articles/ten-usability-heuristics/)

- User cannot see cities already chosen. This is easily fixed using the [Autocomplete](https://material-ui.com/components/autocomplete/) component using the built in functionability of [tags](https://material-ui.com/components/autocomplete/#multiple-values).

---

Made by [Nicolás Lound](https://www.linkedin.com/in/nicolaslound/) with 💛
