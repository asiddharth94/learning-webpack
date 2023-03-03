# learning-webpack

# MODULE 1

1. RUN npm init -y
2. RUN npm i webpack webpack-cli --save-dev
3. node_modules/.bin/webpack is responsible for running webpack command
4. CREATE src/index.js
5. RUN node_modules/.bin/webpack
6. With zero-config (no webpack-config file, this is supported with v4), webpack searches for src/index
7. And bundles the JS and stores it in dist/main.js

```
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

This simply means we haven't told webpack what mode we are working on. Use --mode flag to set value

8. RUN node_modules/.bin/webpack --mode=production
9. ADD script for above in package.json
10. RUN npm run build

# MODULE 2

1. CREATE greetings.js and export-import in index.js
2. CREATE webpack.config.js
3. ADD entry and output details
4. RUN npm run build
5. RUN npm i path --save-dev ; library to resolve path dynamically
6. USE it in webpack.config.js
7. UPDATE webpack mode to development, run the script and notice the difference in build/application.js
   This is because development mode produces non-minified code
8. SET 'watch' to true in webpack config to automatically update the changes

# MODULE 3
