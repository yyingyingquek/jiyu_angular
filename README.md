# Jiyu-Angular

A frontend of Jiyū Active, created using Angular. \
Jiyū Active is a technical apparel e-commerce shop.

## Development server

This project is deployed using Netlify, and can be accessed [here](https://jiyu-angular.netlify.app/).

### Motivation

Even during GA times, my classmates have been telling me to learn Angular. Even though I did not do Angular projects during GA, it was fun and challenging to learn and apply it over the past week cause it was kinda like a Project 5.

### Features

The e-commerce page will bring us to be on the homepage on load. Ideally, the homepage should have a carousel. However, I currently only have these few photos on hand and thus, the homepage and shop doesn't really look like much.

On navigating to 'Shop' on the navigation bar, done using Angular router module, it fetches all the products from firebase which was created to practice HTTP requests of Angular.

### Problems Faced &/or Improvements

1. On click of product details, page cannot be refreshed as it will lose all the information. - Solved with ProductResolver (works on localhost).
2. To complete the full scale app as this is still just a skeleton of what was created in React.
3. Unable to deploy the backend that was built using Django & PostgreSQL on heroku (still trying to solve this). Which was why I created a firebase database to fetch products from there.
4. I forgot how fun vanilla CSS can be as I have been using frameworks since Project 3 of GA cause lazy (lel :rofl:)
5. Netlify is a bit wonky, so PageNotFoundComponent and ProductResolver doesnt seem to work
