# Project Overview

Cookit is a recipe tracker that allows you to view, create & edit recipes and to add their ingredients to a shopping list for easy meal planning!

The website is Built using Appwrite (self-hosted Firebase alternative), Angular, Angular Material UI, HTML and CSS.
The website allows for a Guest view, with limited interaction and a Logged in view with full functionality. Logged in users can Add new recipes, delete or edit any recipes they have created. Logged in users can also add the ingredients from any recipe to their Shopping List. The Shopping List persists when navigating the website and automatically detects overlapping ingredients and sums them together. They also have access to their profile page, which shows all of their created recipes and allow profile deletion.

Routing is done client-side via the React Router. The website uses a mix of class and functional components, the Context API, controlled forms and does styling via CSS components.

Architecturally, components are split into folders (core and shared), containing the relevant logic, template & styling. Services related to Authentication & Fetching data are kept separate and imported when necessary.

# Getting Started

Clone the repo and run `npm install` to install all dependencies.

Run `ng s` to launch the website at http://localhost:4200.