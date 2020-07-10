# backendSQLiteNode.js
The main objective is to interact with `SQLite` databases from a `Node.js` application.

## Table of contents
* [Project](#Project)
* [Technologies](#technologies)
* [Databases](#Databases)
* [APIs](#APIs)
* [Testing](#Testing)
* [Credits](#Credits)

## Project
This project has multiple objectives:
1. Set up Node.js application
2. Check health application - Ping Pong connection
3. Mockup data - response: all the mockup data
4. Database connection - response: all the data from both tables
5. SQL calls - response: specific row (SELECT WHERE)
6. SQL calls - response: combine data from tables (SELECT INNER JOIN)
7. Using Testframework - asynchronous testing
8. Documentation of APIs

## Technologies
Project is created with:
* JavaScript

Express | Nodemon | Sqlite3 | Winston | Mocha | Chai | Chai-http | Swagger-ui-express | Yamljs
* SQLite

SELECT WHERE | SELECT INNER JOIN
* API

## Databases
Used `SQLite` as relational database management system.

`DutchProvinces.db` has 2 different datasets:
1. `infoProvince` - | name | squaremeter | capital |
2. `inhabitants` -  | name | inhabitants |

[Download SqLite](https://www.sqlite.org/index.html)

## APIs
 `Swagger` is used to describe and document RESTful APIs.

> Swagger documentation is listening at http://localhost:4000/api-docs

> API ping is listening at http://localhost:4000/ping

> Mockup data is listening at http://localhost:4000/api/mockupData 

> Province data from both tables is listening at http://localhost:4000/api/provinceData

> Row data from the `inhabitants` table is listening at http://localhost:4000/api/rowData

> Combined data (Inner Join) from both tables is listening at http://localhost:4000/api/combinedData

## Testing
`Mocha` is the library that allows to run tests, and `Chai` contains some helpful functions that will be used to verify our test results.

Multiple tests were conducted:
* Set up Node.js application - Running
* Mockup data api - Status 200
* Row data api - Status 200 | Class response | Properties reponse

## Credits
Backend Express / Node.js starting point:
[Express / Node.js Tutorial](https://expressjs.com/)

Database SQLite starting point:
[SQLite Tutorial](https://www.sqlitetutorial.net/)

Testing Mocha Chai starting point:
[Mocha Chai Tutorial](https://mochajs.org/)

Swagger Documentation starting point:
[Swagger Documentation](https://swagger.io/docs/)

Random Mockup JSON generator:
[JSON generator](https://www.json-generator.com/)

