# NodeJS Blog Library
My first Web Server is made from the NodeJS framework of Javascript and many more frameworks.

![status](https://badgen.net/badge/status/unfinished?labelColor=cyan&color=black)
![nodejs](https://badgen.net/badge/nodejs/v20.3.1?labelColor=green&color=black)
![npm](https://badgen.net/badge/npm/9.6.7?labelColor=red&color=black)
![express](https://badgen.net/badge/expressjs/4.18.2?labelColor=yellow&color=black)
![nodemon](https://badgen.net/badge/nodemon/3.0.1?labelColor=green&color=black)
![morgan](https://badgen.net/badge/morgan/1.10.0?labelColor=blue&color=black)
![mongoose](https://badgen.net/badge/mongoose/7.4.3?labelColor=green&color=black)

![template engine](https://badgen.net/badge/template%20engine/handlebars?labelColor=black&color=orange)
![style](https://badgen.net/badge/style/SCSS?labelColor=black&color=pink)
![boostrap](https://badgen.net/badge/Boostrap/4?labelColor=purple&color=purple)
![mongodb](https://badgen.net/badge/database/mongodb?labelColor=black&color=green)
![prettier](https://badgen.net/badge/format%20code/prettier?labelColor=black&color=grey)

## Suport
- [**GitHub**](https://github.com/github)
- [**npm**](https://github.com/npm)
- [**ExpressJS**](https://github.com/expressjs/express)
- [**Nodemon**](https://github.com/remy/nodemon)
- [**Morgan**](https://github.com/expressjs/morgan)
- [**Handlebars**](https://github.com/express-handlebars/express-handlebars)
- [**Node SASS**](https://github.com/sass/node-sass)
- [**Boostrap 4**](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [**MongoDB**](https://www.mongodb.com/try)
- [**Mongoose**](https://github.com/Automattic/mongoose)
- [**Prettier**](https://github.com/prettier/prettier)
- [**Lint Staged**](https://github.com/okonet/lint-staged)
- [**Husky 🐶**](https://github.com/typicode/husky)
- [**Mongoose Slug Updater**](https://github.com/YuriGor/mongoose-slug-updater)
- [**Mongoose Delete Plugin**](https://github.com/dsanel/mongoose-delete)

# How it works
## Environment settings
To run the server environment, you must download **NodeJS** first.

Once **node** is installed, the **npm package manager** (used to manage NodeJS application modules, libraries and dependencies) will be automatically installed, which you can check like below, if the version is not displayed, you have not successfully installed npm.

Please install **npm** for installation and support for other libraries.
```
$ npm -v
```

Next is to install **ExpressJS** (a NodeJS framework) to provide necessary features such as **routing**, **middleware**, **request** and **response** handling.
```
$ npm i express
```

Download **Nodemon** so that you don't have to manually restart the server when you change the source code, **Nodemon** will automatically update the new source code for you.
```
$ npm i nodemon
```

Next, we need a middleware to handle the logic between the request/response and the web server. Here I choose **Morgan**.

## Start up the Web Server
To start the web server you can run the command below.
```
$ node app.js
```

But since I have installed Nodemon so that I can run the program throughout even if there is a change in the source code to avoid losing time when having to restart continuously, we can do the following:
```json
"start": "nodemon src/app.js"
```

Then we restart the server 1 time throughout.
```
$ npm start
```

From here you can access the web server using the address http://localhost:3000/

## Customize the Web Server
Install Express Handlebars:
```
$ npm i express-handlebars
```

Install Node SASS:
```
$ npm i node-sass
```

**Start the Nodemon tool to transfer the SCSS handler code to your file.css.**
```
$ npm run watch
```

You can rest assured that I have set **watch** in the **package.json** file.
```
"watch": "node-sass -w src/resources/scss/ -o src/public/css/"
// -w = --watch
// -o = --output
```

Middleware that helps the server system convert the default request from the POST method in the <form></form> of the HTML to a PUT.
```
$ npm i method-override
```

## Database Connection
Here I use MongoDB (display data as JSON) to manage the database.

To be able to interact between relationships, create functions, ... for MongoDB in NodeJS we need to install **Mongoose** library.
```
$ npm i mongoose
```

This is my database demo to test the web server.

![image](https://github.com/VenusakaVXT/nodejs-blog/assets/125566811/c85a48f0-4b98-4810-900d-97df8fe5e3eb)

To connect to your database, for my example, here the default port for MongoDB connection is `27017` and the database name is `nodejs_blog`.

I will create a module like this in **src/config/db**.
```javascript
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs_blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connect successfully!!!')
    } catch(err) {
        console.log('Connect failure!!!')
    }
}

module.exports = { connect }
```

To support **Soft delete** data feature, we must use the **mongoose-delete** library of mongoose.
```
$ npm i mongoose-delete
```

## Extensions
In addition, **Nodemon** also supports an additional feature called **inspector** that allows you to debug when the application is reloading automatically.

To open the Inspector, add *--inspector* to the **option** position in *start* of the *package.json* file.
```json
"start": "nodemon --inspect src/app.js"
```

Turn on **Inspect** on the website and we see a **NodeJS** icon next to the **Element** tab. Click on it, the **Inspector** window of Nodemon is opened.

<div align="center">

![image](https://github.com/VenusakaVXT/nodejs-blog/assets/125566811/51e030c5-2c7a-401b-8b19-cb842b7ee92b)

</div>

We can also manually mark **breakpoint** for the statement in the **Sources** tab.

<div align="center">

![image](https://github.com/VenusakaVXT/nodejs-blog/assets/125566811/bf861a86-ba94-4077-b1df-59d62ce21977)

</div>

# Application examples
Here I use **nodejs_blog** library to make an online course management application, mainly functions centered around **CRUD** including features of **Soft Delete ( Delete to Trash, Restore, Permanently Delete)**, you can use it to change UI and apply to other management problems and have more functions like search, sort, ....

# End README
Hopefully I have provided you with a NodeJS library so that you can build many products from the available web server.

More details about the libraries with other features that may apply to your product, you can see the link I attached in **Support** or visit the npm homepage https://www.npmjs.com/ to search.
