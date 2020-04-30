  # Tv Show Application
This is open TV shows application that allows users to view list of all TV shows and their all details. This application usage data from "TV Maza" through API "http://www.tvmaze.com/".

Note: If you face CORS issue, please switch to open network.

 # Installation of vue/cli
This application required Vue cli please install latest version.

npm install -g @vue/cli
Note: Please check Vue CLI is successfully installed. by running command: vue --v if it prints version. you successfully installed Vue Cli
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```
### Project Guidelines

 Naming and declaration rules for variables and functions. Rules for the use   of  white space, indentation, and comments. Programming practices and principles

File Naming Convention, Method Naming Convention, Component Naming Convention, variable, object declaration : camelCase

Folder Naming Convention, Components directives in vue : kabab-case

# Coding Standards
a. camelCase: vue component file names, js variables, objects, functions etc b. PascalCase: importing npm packages etc. c.comments for making more understanble

This application using camelCase naming conventions for Method Naming, variable, object declaration, Example : getResults() , tvShowName etc..

This application usage samll case for Folder Naming Convention, Example :  components. and for files Pascal case for files 

### Vuex Standards:

mutations: All Caps example: SET_ALL_SHOWS
actions: CamelCase example: getShowDetailsById
state: CamelCase ex: tvShow

### Project dependencies
Vue Material Design Component Framework — Vuetify.js.
Axios (Promise based HTTP client for the browser) — Axios.
Vuex is a state management pattern + library for Vue.js — Vuex .
Jest for unit testing — jest.
Prettier for single quote & without semi colon
Node SASS is required
npm install --save-dev node-sass
