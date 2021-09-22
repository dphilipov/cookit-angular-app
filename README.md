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
    <!-- <a href="https://www.mosquitoapp.net">Live Demo</a>
    · -->
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

**Register** a new account & **Login**. This allows you to **Create** new landmarks, to **Comment** on all existing ones and to **Tag/Untag** on the ones you have visited. Furthermore, you can **Edit** & **Delete** the landmarks you have created. Going to **Map** loads a map with all of your created landmarks. In your **Profile** page you can view your latest activity and **Delete** your account if needed.


<!-- CONTACT -->
## Contact

Dimitar Filipov - dphilipov@mail.bg

Project Link: [https://github.com/dphilipov/cookit-angular-app.git](https://github.com/dphilipov/cookit-angular-app.git)









<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[app-screenshot]: /src/assets/app-screenshot.png
[sctructure-screenshot]: src/assets/structure.png
