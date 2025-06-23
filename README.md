TO DEPLOY TO GITHUB PAGES:

`npm run deploy`

That should also run `predeploy` script in `package.json` which I have also configured to add the CNAME directory to `dist/`. Ensure it does that or the custom domain won't work properly.

This process uses the `gh-pages` package. In Settings -> Pages on Github, the branch to deploy needs to be `gh-pages`, folder `/`. This package takes the `dist/` folder that gets built and pushes it to that branch to keep the `main` branch clean of all the build stuff.