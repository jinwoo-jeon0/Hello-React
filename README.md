# Hello React

[![Build Status](https://travis-ci.com/jinwoo-jeon0/Hello-React.svg?branch=master)](https://travis-ci.com/jinwoo-jeon0/Hello-React)

## Environment

* Windows 10 64-bit

## How to run

### Prepare

```sh
git clone https://github.com/jinwoo-jeon0/Hello-React.git
cd Hello-React
yarn
```

### Develop

```sh
yarn start
```

### Build

```sh
yarn build
```

### Run using `serve`

```sh
yarn serve -s build
```

## Install scoop

[http://scoop.sh/](http://scoop.sh/)

scoop is a command-line installer for Windows. This is needed to install Yarn and nodejs.

### Prepare a preferred location for scoop

* default: `%USERPROFILE%\scoop`

```bat
mkdir "%new-scoop-dir%"
mklink /j %USERPROFILE%\scoop "%new-scoop-dir%"
```

[install-scoop.cmd](https://gist.github.com/jinwoo-jeon0/c503487e4f13c7c680d53d58750873b9)

### Install scoop using the official script

```bat
powershell -ExecutionPolicy RemoteSigned -Command "iex (new-object net.webclient).downloadstring('https://get.scoop.sh')"
```

## Install Yarn and nodejs

[https://yarnpkg.com/](https://yarnpkg.com/)

Yarn is a package manager. This is needed to use React.

### Prepare a preferred location for Yarn

* default: `%LOCALAPPDATA%\Yarn`

```bat
mkdir "%new-Yarn-dir%"
mklink /j %LOCALAPPDATA%\Yarn "%new-Yarn-dir%"
```

### Install Yarn

```bat
scoop install nodejs
scoop install yarn
```

## Install React

[https://reactjs.org/docs/add-react-to-an-existing-app.html#installing-react](https://reactjs.org/docs/add-react-to-an-existing-app.html#installing-react)

```bat
yarn init
yarn add react react-dom
```

## Create a new app

```bat
npx create-react-app hello-react
cd hello-react
```

### Development mode

```bat
yarn start
```

### Production mode

#### Install server globally

```bat
yarn global add serve
```

#### Build & Run

```bat
yarn build
%LOCALAPPDATA%\Yarn\bin\serve -s build
```

#### Stop

I found this in [a stackoverflow answer](https://stackoverflow.com/a/48089171/3300315).

Run serve with no argument.

```bat
%LOCALAPPDATA%\Yarn\bin\serve
```

And then use `CTRL-C`.
