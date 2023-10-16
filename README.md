<!-- Description -->
## Description

This is a simple Node.js web app that can connect to MongoDB and count the number of website visitors.

### Installation

Install the required packages located in package.json.
  ```sh
  npm i
  ```

### Prerequisites

Environment variables needed for the app

   ```sh
   WEBport # Web app port, (optional) default: 3000
   DBuser # MongoDB user, (required) example: test
   DBpass # MongoDB pass, (required) example: test123
   DBhosts # MongoDB host(s), (required) example: "mongo-0.mongo" or "mongo-0.mongo,mongo-1.mongo"
   DBport # MongoDB port, (optional) default: 27017
   ```

<!-- USAGE EXAMPLES -->
## Usage

Start your app
  ```sh
  node index.js
  ```
