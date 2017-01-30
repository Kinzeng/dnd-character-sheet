# DnD Character Management

This project is a tool for Dungeons and Dragons players to create and manage a list of their characters. The application will automatically perform necessary calculations in terms of stats and their modifiers on skills. It will minimally let users add their own items into their inventory, but if development continues the application may also have an internal list of known DnD items. There will be text fields for the user to write down notes about the campaign, their character's description (personality, backstory, etc.), and any other information that may be useful to keep of.

Planned Features:

  * Internal Item List
  * Internal Spell List
  * Die Roller

If you want to run this project locally:

  1. clone this project to your machine: `git clone https://github.com/Kinzeng/dnd-character-sheet.git`
  2. if you don't have MongoDB installed, follow [these instructions](https://docs.mongodb.com/manual/installation/) to install it
  3. cd into the repository: `cd dnd-character-sheet`
  4. install dependencies: `npm install`
  5. build the project: `npm run build`
  6. start the mongo server: `npm run mongo`
  7. start the DnD server: `npm run start`
    * to run the project in development mode (watch for changes): `npm run dev`
  8. navigate to [http://localhost:8080](http://localhost:8080)
