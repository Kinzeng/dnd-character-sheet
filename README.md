# DnD Character Management

## Milestone 1

This project is a tool for Dungeons and Dragons players to create and manage a list of their characters. The application will automatically perform necessary calculations in terms of stats and their modifiers on skills. It will minimally let users add their own items into their inventory, but if development continues the application may also have an internal list of known DnD items. There will be text fields for the user to write down notes about the campaign, their character's description (personality, backstory, etc.), and any other information that may be useful to keep of. To help the player while they are playing, the application will have a database of spells so that the user can look up information about them and will have a die roller in case the user does not own any themselves.

### Wireframes

Dashboard
![Dashboard](/documentation/dashboard.png)

Character Sheet
![Character Sheet](/documentation/character-sheet.png)

### Site Map
![Site Map](/documentation/sitemap.png)

### Use Cases

* As an avid DnD player, I play in many campaigns and I have several characters, so I want a tool to keep track of all my characters in one place so that I won't run the risk of losing the sheets.
* As an online DnD player, I want to have character sheets stored on my computer while I play so that I don't have to print out several pages for each character.
* As a casual DnD player, I don't want to have to calculate every small thing like proficiency bonuses because they seem very tedious and take away from the overall experience.
* As a fan of mages and spellcasting, I want to be able to find my spells and what they do quickly so that everyone else doesn't have to wait for me to find my spells every time I cast them.

### Research Topics

* Webpack- 4 points
  * Webpack is a module bundler that helps to build client side code into one or more bundles of code. It allows the use of require (or ES6 import) in client side code for a more organized development process, as well as several other useful features like ES6 transpiling and also linting.
* Redux- 6 points
  * Redux is a global state management library (similar to Flux) that helps with React implementation because of how information is mostly passed from parent to child in React. There is a global "store", which is essentially just a Javascript object, and react-redux provides a good interface to access this store from the components. Redux is a very minimalist library (2kB including dependencies), so a lot of the implementation will be left to me, which is why I am listing it as 6 points.
