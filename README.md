# Album of the day - Frontend

[![Netlify Status](https://api.netlify.com/api/v1/badges/f0763875-dd9f-40a9-a0b3-af13b9ec01f8/deploy-status)](https://app.netlify.com/sites/flamboyant-bassi-5e3d96/deploys)
  
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
