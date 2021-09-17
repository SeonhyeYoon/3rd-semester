# Basic Framework For Front End Vanilla.js Projects

## Preflight Check
1. Run npm install from the framework root folder. This will create the node_modules and install the dependancies found in the package.json file.
```bash
  npm install
```

1. Run development build using the parcel bundler.
```bash
   npx parcel src/index.html
```
or
```
  npm start
```

1. Run production build using the parcel bundler.
```bash
   npx parcel build src/index.html
```
or
```
  npm run build
```

## Git Commands
```git
 
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/your-github-account/repo-name.git
git push -u origin main

```

## Remove the local .git folder
```bash
 // show hidden files looking for .git
    ls -lah  
    rm -rf .git
```