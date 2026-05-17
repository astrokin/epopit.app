# epopit.app

Static Firebase Hosting version of the ePopit landing page.

## Local preview

```sh
npm run preview
```

## Manual deploy

Select your Firebase project once:

```sh
npx --yes firebase-tools@latest use --add
```

Deploy manually from this directory:

```sh
npm run deploy
```

You can also pass a project id explicitly:

```sh
npx --yes firebase-tools@latest deploy --only hosting --project <project-id>
```

No CI/CD is configured.

## Static fallback

The site is plain static HTML/CSS. For a quick local check without Firebase:

```sh
python3 -m http.server 5173 --directory public
```
