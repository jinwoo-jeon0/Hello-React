# Environment
* Windows 10 64-bit


# Install scoop
[http://scoop.sh/](http://scoop.sh/)

scoop is a command-line installer for Windows. This is needed to install Yarn and nodejs.

## Prepare a preferred location
* default: `%USERPROFILE%\scoop`
```
mkdir "%new-scoop-dir%"
mklink /j %USERPROFILE%\scoop "%new-scoop-dir%"
```
[install-scoop.cmd](https://gist.github.com/jinwoo-jeon0/c503487e4f13c7c680d53d58750873b9)

## Install
```
powershell -ExecutionPolicy RemoteSigned -Command "iex (new-object net.webclient).downloadstring('https://get.scoop.sh')"
```


# Install Yarn and nodejs
[https://yarnpkg.com/](https://yarnpkg.com/)

Yarn is a package manager. This is needed to use React.

## Prepare a preferred location
* default: `%LOCALAPPDATA%\Yarn`
```
mkdir "%new-Yarn-dir%"
mklink /j %LOCALAPPDATA%\Yarn "%new-Yarn-dir%"
```

## Install
```
scoop install nodejs
scoop install yarn
```


# Install React
[https://reactjs.org/docs/add-react-to-an-existing-app.html#installing-react](https://reactjs.org/docs/add-react-to-an-existing-app.html#installing-react)

```
yarn init
yarn add react react-dom
```


# Create a new app
```
npx create-react-app hello-react
cd hello-react
```

## Development mode
```
yarn start
```

## Production mode
```
yarn build
yarn global add serve
%LOCALAPPDATA%\Yarn\bin\serve -s build
```
### Stop serve
[front the stackoverflow answer](https://stackoverflow.com/a/48089171/3300315)
```
%LOCALAPPDATA%\Yarn\bin\serve
```
And the use `CTRL-C`
