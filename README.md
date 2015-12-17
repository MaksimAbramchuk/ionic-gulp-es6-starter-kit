#Ionic Gulp boilerplate
Ionic application boilerplate for Gulp and ES6

![Ionic and Angular](http://moduscreate.com/wp-content/uploads/2014/01/ionic-angular-opti.png)

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
###Mobile app
When your app is interesting enough to be tested on mobile device, create a build.

Don't forget to compile from sources:
```sh
gulp
```

And then we can create the build for iOS:

```sh
ionic build ios
```

and even test it, if you use OS X:

```sh
ionic emulate ios
``` 

More info about builds, including Android, can be found in Ionic tutorial.
 
One more interesting feature Ionic has: Ionic View. It's amazing thing and I recommend you to try it - pretty simple to use and saves tones of time for debug and testing on real devices. To start, just run:

```sh
ionic upload
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

##Build pack

![Ionic](http://dndigital.net/wp-content/uploads/2015/03/ionic-logo-blog-767x355.png)
![Angular](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png)
![Gulp](https://avatars0.githubusercontent.com/u/6200624?v=3&s=400)
![Babel](https://avatars0.githubusercontent.com/u/9637642?v=3&s=400)
![SCSS](http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg)

