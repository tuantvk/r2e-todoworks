# r2e-todoworks

todoworks for desktop use React, Electron and Mobx

![Demo layout](https://github.com/tuantvk/r2e-todoworks/blob/master/resource/todos.png)

## Table of Content

1. [Development](#1-development)
2. [How to use it?](#2-how-to-use-it)
3. [Contributing](#3-contributing)
4. [License](#4-license)

## 1. Development

- Clone the repo:
```
git clone https://github.com/tuantvk/r2e-todoworks.git
```

- Go to the project directory and install dependencies: 
```
cd r2e-todoworks && npm install
```

```
$ npm run dev
```

Generate the binary:
* For Linux
```
$ npm run package-linux
```
Maybe you will install some depends packages.
* For Mac
```
$ npm run package-mac
```
After that, you will see the binary in `./release` folder

## 2. How to use it ?

| Icon  | Description |
| ------------- | ------------- |
| Check | Click when todo done  |
| Fire | Todo in status warning, and move on top |
| Rocket | Click when you want change status todo normal to warning |
| Like | Todo in status done and move down in list todo done |
| Close | Remove todo |

## 3. Contributing

So you want to contribute? Fun! I love seeing new PRs for r2e-todoworks.
If you are thinking about working on something, feel free to make an issue beforehand so that you can make sure it'll be worth your time!


## 4. License

MIT License
