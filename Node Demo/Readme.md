

## Making your package available

To make your Node.js package available for linking, first initialize it using npm:

```bash
npm init
```

After you've set up your package, use the following command to create a global symlink to it:

```bash
npm link
```

## Linking the package in another Node.js application

To use your linked package in another Node application, navigate to the root directory of that application. Use the `npm link` command followed by the name of your package to establish a connection:

```bash
npm link name-of-package
```

For example, if your package name is `product-fetch`, the command would be:

```bash
npm link product-fetch
```

## Testing the `product-fetch` API

For testing the `product-fetch` API, there's another Node module named `test-product-fetch`. Before you can run the test module, you need to link it:

```bash
npm link name-of-module
```

Once you've linked the test module, navigate to its root directory and run the following command:

```bash
node index.js
```

This will execute the test for the `product-fetch` API.
