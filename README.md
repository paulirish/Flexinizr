did this to try to repro https://code.google.com/p/chromium/issues/detail?id=273384


```sh
npm install
grunt watch
```

1. serve the dist folder with a simple server
2. add dist folder as a worksapce
3. map them.
4. run `grunt watch` if not already running
5. make a change to `flexinizr-unprefixed.css` and save. (i suggest a bg color on the top body,html rule)
6. (watch should trigger and postcss should compile)

on ToT i see chrome update with the new styles. this happens regardless of what the "auto-reload generated css" checkbox is set to.
