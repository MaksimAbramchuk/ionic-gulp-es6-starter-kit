#Ionic Gulp boilerplate
Ionic application boilerplate for Gulp and ES6

![Ionic](http://moduscreate.com/wp-content/uploads/2014/01/ionic-angular-opti.png)

##Features
* ES6 instead of ES5
* SCSS instead of CSS
* Automatic compilation
* Livereload
* Development build with source maps
* Automatic bower components injection
* Automatic scripts and stylesheets injection

##Usage

###Running the App during Development
This command automatically compiles ES6 to ES5, scss, injects bower components, generates source maps, starts livereload server and opens your app in the browser.

```sh
gulp serve
```

##Directory layout

### Source

```sh
angular-gulp-ionic-boilerplate
└── src
    ├── app                  # application folder
    │   ├── components       # components folder
    │   ├── locations        # locations folder
    │   ├── index.config.js  # config file
    │   ├── index.module.js  # main angular module
    │   ├── index.route.js   # ui router config
    │   ├── index.run.js     # file with run loop
    │   └── index.scss       # main scss file
    └── assets               # assets folder
        ├── images           # images folder
        ├── favicon.ico      # favicon
        └── index.html       # main page which will be rendered to a client
```
