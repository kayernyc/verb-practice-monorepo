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

```node
pnpm nx build global-types
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

