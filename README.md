## Construyendo la app

```

ng new myNewApp

npm install angularx-qrcode --save

npm i --save-dev @types/qrcode

```

## Desplegando en Github Pages
```
Create a gh-pages branch

$ git branch gh-pages
$ git checkout gh-pages

Build por primera vez
$ git checkout -b gh-pages
$ git push origin gh-pages
$ npm install -g angular-cli-ghpages

$ ng build --prod --base-href https://[username].github.io/[repo]/`
$ ng build --prod --base-href https://Salacodigo.github.io/qr_generator/

$ ngh --dir=dist/[project-name]

Build despues de la primera vez:
$ ng build --prod
```