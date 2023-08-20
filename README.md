# NodeJS Blog Library
My first Web Server is made from the NodeJS framework of Javascript and many more frameworks.

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

## How it works
To run the server environment, you must download NodeJS first.

Once **node** is installed, the npm package manager (used to manage NodeJS application modules, libraries and dependencies) will be automatically installed, which you can check like below, if the version is not displayed, you have not successfully installed npm.

Please install **npm** for installation and support for other libraries.
```
npm -v
```

Next is to install **ExpressJS** (a NodeJS framework) to provide necessary features such as **routing**, **middleware**, **request** and **response** handling.
```
npm i express
```

Download **Nodemon** so that you don't have to manually restart the server when you change the source code, **Nodemon** will automatically update the new source code for you.
```
npm i nodemon
```

Start the Nodemon tool to transfer the **SCSS** handler code to your **file.css**.
```
npm run watch
```

You can rest assured that I have set **watch** in the **package.json** file.
```
"watch": "node-sass -w src/resources/scss/ -o src/public/css/"
// -w = --watch
// -o = --output
```


