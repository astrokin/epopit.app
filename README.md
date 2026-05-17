# epopit.app

Static Firebase Hosting version of the ePopit landing page.

## Local preview

```sh
npm run preview
```

## Manual deploy

The default Firebase project is configured in `.firebaserc` as `electro-pop-it`.
The contact form writes to the Firestore collection `contactRequests`, so the project needs a default Firestore database before deploying Firestore rules.

Deploy hosting and Firestore rules manually from this directory:

```sh
npm run deploy
```

Deploy only the static site:

```sh
npm run deploy:hosting
```

You can also pass a project id explicitly:

```sh
npx --yes firebase-tools@latest deploy --only hosting,firestore:rules --project electro-pop-it
```

No CI/CD is configured.

## Static fallback

The site is plain static HTML/CSS. For a quick local check without Firebase:

```sh
python3 -m http.server 5173 --directory public
```
