
Squash-a-Bug
================

running code for a Single Page Application using web Development skills.

## Purpose

This is a HTML5 / JS / CSS (Single Page Application) developed with Sublime Text and Chrome.

It was created to showcase my skills after completing the teaching portion of the Web Development training; using all the skills I've developed over the two weeks to create a simple but solid game from the ground up.

## Functionality

This is a simple application that displays a single page with instructions, start and reset buttons. Along with the gameboard, a timer and a scoring system. 

CONTINUE HERE!!!

## Implementation

The functionality has been implemented using the following features:

* AngularJS 1.2, documented
* Twitter Bootstrap 3.2
* Javascript validated with JSHint and JSCS
* automated CI build on code repo change
* semantic HTML5
* well-structured CSS built with LESS
* responsive web development/design (no separate m-dot site)
* page content sourced via XHR service call with JSON response (static)
* multi-browser unit testing with Jasmine & Karma
* grunt-driven builds to dev and prod distributions

### Building

Fork/clone this repo, then:

``` sh
$ bower install && npm install
# build the dev distribution:
$ grunt dev
# run the unit tests:
$ grunt test
# just build the docs
$ grunt docs
# build the prod distribution (includes clean, test & docs) :
$ grunt prod
```

### Running

Set up local web servers to point to `dist/dev` and `dist/prod` for _dev_ and _prod_ distributions, respectively.

## Issues

The github issue system holds the issues for this project:

* [all](https://github.com/mcalthrop/angular-spa-demo/issues)
* [bugs](https://github.com/mcalthrop/angular-spa-demo/labels/bug)
* [enhancements](https://github.com/mcalthrop/angular-spa-demo/labels/enhancement)
* [investigate](https://github.com/mcalthrop/angular-spa-demo/labels/investigate)

## Demo site

[mcalthrop.github.io/angular-spa-demo/](http://mcalthrop.github.io/angular-spa-demo/)

This site is kept up to date with the latest code in the codebase.