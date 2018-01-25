# Environment
* Windows 10 64-bit


# Install scoop
[http://scoop.sh/](http://scoop.sh/)
## Prepare a preferred location
* default: `%USERPROFILE%\scoop`
```
mkdir "%new-scoop-dir%"
mklink /j %USERPROFILE%\scoop "%new-scoop-dir%"
```

## Install scoop
```
powershell -ExecutionPolicy RemoteSigned -Command "iex (new-object net.webclient).downloadstring('https://get.scoop.sh')"
```


# Install Yarn and nodejs via scoop
[https://yarnpkg.com/](https://yarnpkg.com/)
## Prepare a preferred location
* default: `%LOCALAPPDATA%\Yarn`
```
mkdir "%new-Yarn-dir%"
mklink /j %LOCALAPPDATA%\Yarn "%new-Yarn-dir%"
```

## Install Yarn
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
yarn start
```
