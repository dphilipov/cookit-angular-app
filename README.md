<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/dphilipov/cookit-angular-app.git">
    <img src="./src/assets/cooking-logo-colored.png" alt="Logo" width="200" height="160">
  </a>

  <h3 align="center">Cookit App</h3>

  <p align="center">
    Create & browse delicious cooking recipes and generate a shopping list with ingredients!
    <br />
    <br />
    <img width ='36px' src ='https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/angularjs.svg'>
    <img width ='200px' src ='https://appwrite.io/images/appwrite.svg'>
    <img width ='210' src ='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.edureka.co%2Fblog%2Fwp-content%2Fuploads%2F2020%2F02%2Fangular-material-logo.jpg&f=1&nofb=1'>
    <br />
    <a href="https://www.cookitapp.org">Live Demo</a>
    ·
    <a href="https://github.com/dphilipov?tab=repositories">Explore my other projects</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![App Screen Shot][app-screenshot]

Cookit is a digital cookbook that allows you to create new recipes, browse through all existing recipes and to generate a shopping list with all ingredients necessary for the recipes that you want to cook.

## Key Features

* A **Guest view**, with limited interaction and a **Logged in view** with full functionality
* Logged in users can: 
    * **Create** new recipes
    * **Generate a Shopping List** which calculates the necessary ingredients to buy
    * **Delete** or **Edit** any recipe they have created 
    * Access their **Profile** page, which shows their latest created recipes
* Client-side **Routing** via **Angular Router**

The website uses Appwrite (a self-hosted Firebase alternative) for Authentication, Database and Storage. 

Architecturally, modules are split into *core* & *shared* with different folders for each components. Services related to **Authentication** and **Fetching data** are kept separate and imported when necessary.

![Structure Screen Shot][sctructure-screenshot]

## Built With

The project is built using:
* [Angular](https://angular.io/)
* [Appwrite (a self-hosted Firebase alternative)](https://appwrite.io/)
* [Angular Material](https://material.angular.io/)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

To start the project, you first need to install Angular CLI
   ```sh
   npm install -g @angular/cli
   ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dphilipov/cookit-angular-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the project
   ```sh
   ng s
   ```



<!-- USAGE EXAMPLES -->
## Usage

### [View the Live Demo](https://www.cookitapp.org)

**Register** a new account & **Login**. This allows you to **Create** new recipes and to add recipe ingredients to a **Shopping List**. The **Shopping List** persists while navigating the website and detects automatically if you are adding an already existing ingredient. In such cases, the **Shopping List** combines the quantities under one entry. Furthermore, you can **Edit** & **Delete** the recipes you have created. In your **Profile** page you can view all of your created recipes and **Delete** your account if needed.

![Shopping List Preview][shopping-list-preview]


<!-- CONTACT -->
## Contact

Dimitar Filipov - dphilipov@mail.bg

Project Link: [https://github.com/dphilipov/cookit-angular-app.git](https://github.com/dphilipov/cookit-angular-app.git)









<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[app-screenshot]: /src/assets/app-screenshot.png
[sctructure-screenshot]: src/assets/structure.png
[shopping-list-preview]: src/assets/shopping-list-preview.gif
