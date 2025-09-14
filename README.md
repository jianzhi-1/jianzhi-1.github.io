# Personal Homepage
This is the repository for my personal homepage from 2021-present, built with React.

![Jianzhi Wang](/public/favicon.ico)

To redeploy, run `npm run deploy`.

### Local Development
```shell
nvm use 14
npm start
```

### Local Deployment
```shell
nvm use 14
npm run build
cp build/index.html build/404.html
npm install -g serve 
serve -s build
```
