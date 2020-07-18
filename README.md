# Album of the day - Frontend
  
## Install libraries

```
yarn
```

### Run for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```
  
### Docker

    docker build -t album-of-the-day .
    docker run -it -p 8080:8080 --rm --name album-client album-of-the-day