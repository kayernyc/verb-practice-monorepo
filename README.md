# Verb Practice Monorepo

## What is this repo buiding?

This repo will contain 2 backend services and possible future frontend consumers for one of those services, and an administration panel.

The ultimate aim is provide a backend to power different consumers for creating apps that train the user against different verb sets.

### future features:

- auth
- graphQL
- Vite type checking, or maybe ARK

## To Start:

### Requirements

- [pnpm](https://pnpm.io/installation) @^8.3.1
- [node](https://nodejs.org/en/download) @^18.15.0

### Start

1. Clone this repository
2. Run `pnpm install`

This project uses `pnpm` and `nx` for monorepo management. To run any `nx` command, prefix the standard command with `pnpm`. For example:

```sh
pnpm nx build global-types
```

It is often useful to build the module and watch them while developing apps. This is an example of how to run and watch a module:

```sh
pnpm nx build global-types --watch
```

To build and watch multiple modules:

```sh
pnpm nx run-many -t build -p global-types german-types --watch
```

### Contributing

1. pull a branch off of `main`
2. make changes (small changes are the best changes, except for deleting)
3. stage your changes
4. use `pnpm cz` to trigger a commitzen to commit.
5. push to origin

### To add internal, workspace packages

```node
pnpm add <internal workspace package> --filter <target workspace> --workspace
```

### Running tests

To run a single test in an app, use the following command:

```js
npx jest <relative path to `test`> --config=<relative path to `jest.config.ts`>
```

This will trigger the tsc compiler and properly translate any path aliasing in the node applications.

To run test suites, all `test` commands have a type appended such as `test:unit`. Verify which suite you want to test and then run

```sh
pnpm nx <test type> target
```

for example:

```sh
pnpm nx test:unit db_management
```
