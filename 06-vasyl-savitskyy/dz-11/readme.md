```bash
# Install dependencies:
npm install

# Server with hot reload at http://localhost:8081/
# ./webpack.config.js
#   19 // publicPath: './', // for local build
#   20 publicPath: '/',
# ./src/index.html
#   5 <link rel="shortcut icon" href="/favicon.ico" />
# dist/ folder should be removed
npm start

# Output will be at dist/ folder
# ./webpack.config.js
#  19 publicPath: './', // for local build
#  20 // publicPath: '/',
# ./src/index.html
#   5 <link rel="shortcut icon" href="./favicon.ico" />
npm run build
```
### dz-11