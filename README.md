# Groupal
Groupal is a social media website base on loopback, react.

## Quick start

1.  Make sure that you have Node v8 or above installed.
2.  Clone this repo.
3.  go to server folder, copy `datasources.development.json.example` paste and rename as `datasources.development.json`, edit it edit it to match your db setup<br />
4.  Run `yarn install` to install a the dependencies. If you don't have yarn, run `npm install -g yarn` to install it.<br />
5.  In MySQL Workbench, execute `CREATE DATABASE groupal`<br />
6.  At this point you can run `npm start` to start the app at `http://localhost:3000`. You will be prompt to reset and populate db (choose y) or sync db changes (choose n).

Now you're ready to rumble!

## Development

refer: https://github.com/mean-expert-official/loopback-sdk-builder/wiki

use `npm run generate` to generate new files

> Please note that this boilerplate is **production-ready and not meant for beginners**! If you're just starting out with react or redux, please refer to https://github.com/petehunt/react-howto instead. If you want a solid, battle-tested base to build your next product upon and have some experience with react, this is the perfect start for you.

## Documentation

- [**The Hitchhikers Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
- [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.
