# React-Typescript NPM Package Boilerplate

Adapted from react-npm-component-boilerplate by [Dinesh Pandiyan](https://github.com/flexdinesh/react-npm-package-boilerplate)

Boilerplate code for publishing a React-Typescript NPM package.

* Bundled with [Webpack](https://webpack.js.org/)
* Develop with Hot Module Replacement [(HMR)](https://webpack.js.org/concepts/hot-module-replacement/)
* Includes linting with [ESLint](http://eslint.org/)
* Testing with [Jest](http://facebook.github.io/jest/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).
* Type-checking with [Typescript](https://www.typescriptlang.org/)
* Base component uses modern react with hooks and function components
  
## Usage

1. Install modules - `yarn`

2. Start example and start coding - `yarn start`

3. Run tests - `yarn test`

4. Bundle with - `yarn build`

5. To test if it works correctly in another project you can use npm `npm install -S ../react-typescript-npm-package-boilerplate` Note the relative path

E.g. this folder structure

```
    ./workspace/
        MyProject
        react-typescript-npm-package-boilerplate
```

## Extra

Adjust your `.eslintrc` config file to your own preference.

## NPM equivalent

yarn | npm
---- | ---
`yarn` | `npm install`
`yarn test` | `npm run test`
`yarn build` | `npm run build`

## License

MIT © Joshua Dyck
