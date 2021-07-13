# Wide Eye Creative
## Technical Test
---

### Repo Details
The repo provided here has a basic file structure and boilerplate for a small static site. We have included a simple Webpack setup for your convenience. However, you should feel free to modify or replace any aspect of this repo to best suit your needs or development preferences.

### Set Up
**We are assuming a node +14 enviro here**. If you need to switch to node v14 consider using a tool like https://github.com/nvm-sh/nvm to manage your local enviro.

1. Fork repo & clone
2. Use `nvm use 14` or other to ensure the expected node version
3. Run `npm i` to add node_modules
4. Run `npm run watch`

####Do not open a pull request to this repo.

### Webpack
The basic Webpack config uses babel and postcss to transpile your src code to production ready assets. ES6 support is included, however some polyfills will likley be needed if using specific js methods.

#### Available Commands:
- `npm run build` will build production assets to the `./build` folder
- `npm run start` will start the dev server
- `npm run start` will watch js/scss file changes and will display error details

### SCSS/CSS
We have made an opinionated choice to use SCSS here as it tracks with our internal development expectations. You are free to work in raw CSS or another abstraction. A normalize css file has been added for convenience.

### API Source
We are using a basic mockend API as described by `.mockend.json` there should be no need to modify this resource. The API does not provide photos, as a placeholder please use `https://unsplash.com/` or a simple random image url from `https://picsum.photos/410/200` (The last two params of the url describe the size).

##### Posts Endpoint: 
`https://mockend.com/Wide-Eye-Creative/technical-boilerplate/posts`

##### Sample response object:

```
{
  "authorName": "GXQaREWzuU",
  "excerpt": "PcHAQIWuEY",
  "id": 1,
  "publishedDate": "2001-12-01T16:43:31Z",
  "title": "MEDyfLxqeF",
  "views": 56
}
```
