# backendSQLiteNode.js
The main objective is to interact with `SQLite` databases from a `Node.js` application.

## Table of contents
* [Project](#Project)
* [Databases](#Databases)
* [APIs](#APIs)
* [Technologies](#technologies)
* [Credits](#Credits)

## Project
This project has multiple subgoals:
1. Set up Node.js application
2. Check health application - Ping Pong connection
3. Mockup data - response: all the mockup data
4. Database connection - response: all the data from both databases
5. SQL calls - response: specific rows and/or columns
6. SQL calls - response: combined rows and/or columns

## Databases
[Download SqLite](https://www.sqlite.org/index.html)

`DutchProvinces.db` has 2 different datasets:
1. `infoProvince` - name / squaremeter / capital
2. `inhabitants` -  name / inhabitants

## APIs
> API ping is listening at http://localhost:4000/ping

> Mockup data is listening at http://localhost:4000/api/mockupData 

> Province data is listening at http://localhost:4000/api/provinceData

## Technologies
Project is created with:
* JavaScript
* Express
* Node.js
* API
* SQLite

## Credits
Backend Express / Node.js starting point:
[Express / Node.js Tutorial](https://expressjs.com/)

Database SQLite starting point:
[SQLite Tutorial](https://www.sqlitetutorial.net/)

Random Mockup JSON generator:
[JSON generator](https://www.json-generator.com/)
