# mongodb-connection-instruction-to-local-machine
### created using obsidian

1. Create a blank repository and open in a code editor
2. Go to terminal, insert
```npm
npm init -y
```
This will create a `package.json` file in the directory. All packages installed will be shown here.

3. install ***mongodb*** environment 
```npm
npm i mongodb dotenv
```

4. Create a `.env` file in the directory. This will contain all the essential information and database paths.

5. Now in `.env` file, write the following:
```
DATABASE_LOCAL="mongodb://localhost:27017"
```
This will create a local DB at the localhost.

6. Now create a file named `dbConfig.js` . In the file write the following:
``` javascript
// Mongo DB Driver client  
const { MongoClient } = require("mongodb");  
  
// dotenv configuration  
require('dotenv').config()

//new mongo client  
const client = new MongoClient(process.env.DATABASE_LOCAL)  
  
// checking  
console.log("database created")  
  
// exporting for future use  
module.exports = {client}
```
These lines were obtained from mongodb site and dotenv npm site. The exported `client` module can be used in any `.js` file

Running the file will show `database created` in terminal.

#### In this way you successfully created the database in local computer and connected to your code.


