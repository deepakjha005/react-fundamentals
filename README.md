# Food Ordering App

/\*\*

- UI structure.
-
- 1.  Header - logo and nav bar items.
- 2.  Body - Search Bar and Restaurant container
- (i). Search Bar.
- (ii). Restaurant Container -
-                  i.Restaurant Card
-                       Dish Name
-                       restaurant name
-                       cuisine name
-                       restaurant image
- \*/

# Redux toolkit

- Install @reduxjs/toolkit and react-redux
- create a store or configure the store
- provide store to across the components
- create a slice for cart item
- add action in the slice
- dispatch action from the component
- consume the store data in the component

# setting up testing in our app

- We will use react testing library.
- install @testing-library/react @testing-library/dom
- RTL used jest inside it so install jest
- jest uses babel so install babel - babel-jest @babel/core @babel/preset-env
- create babel config file (babel.config.js)
- to solve conflict issue we will create .parcelrc file
- now need to configure jest so run npx create-jest(init)
- it will ask some option and based on that it will create jest.config.mjs
- for running test cases or for environment we will use jest-environment-jsdom library
