const loopback = require('loopback');
const boot = require('loopback-boot');
const prompt = require('prompt');

const app = loopback();

app.start = function start() {
  // start the web server
  return app.listen(() => {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }

    if (process.env.NODE_ENV === 'development') {
      autoMigrateValidate();
    } else {
      autoUpdate([]);
    }
  });
};

const autoUpdate = function autoUpdate(tbs) {
  let tables = tbs;
  const ds = app.dataSources.db;
  // if tables list is not supplied - try and extract them from datasource
  if (!tables || tables.length === 0) {
    tables = getTablesFromDataSource(ds);
  }
  console.log(
    `Starting autoupdate of tables into database ${
      ds.connector.settings.database
    }`,
  );

  ds.autoupdate(tables, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Completed auto update of tables: ${tables.join(', ')}.`);
    }
  });
};

const getTablesFromDataSource = function getTablesFromDataSource(ds) {
  const modelnames = Object.keys(ds.models);
  const tables = modelnames.filter(modelname => {
    const model = ds.models[modelname];
    if (model && model.dataSource && model.dataSource.name === 'db') {
      return true;
    }

    return false;
  });
  return tables;
};

const autoMigrateValidate = function autoMigrateValidate() {
  prompt.start();
  prompt.get(
    [
      {
        name: 'reply',
        description: 'Do you want to reset database? (y/n)',
      },
    ],
    (err, res) => {
      if (res.reply === 'y') {
        autoMigrateAction();
      } else {
        console.log('skipping automigrate');
        autoUpdate([]);
      }
    },
  );
};

const autoMigrateAction = function autoMigrateAction() {
  const ds = app.dataSources.db;
  ds.automigrate(() => {
    createData(ds).then(() => {
      console.log('auto migrate completed');
    });
  });
};

// If required to load data when intializing db
const createData = function createData(ds) {
  return ds.models.Account.create({
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin',
    type: 'super',
  })
    .then(() =>
      ds.models.Role.create({
        name: 'super',
      }),
    )
    .then(role =>
      role.principals.create({
        principalType: 'USER',
        principalId: 1,
      }),
    )
    .then(() =>
      ds.models.Account.create([
        {
          username: 'sun',
          email: 'sun@example.com',
          password: 'sun',
          type: 'business',
        },
        {
          username: 'user',
          email: 'user@example.com',
          password: 'user',
          type: 'user',
        },
      ]),
    )
    .catch(err => {
      console.log(err);
    });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, err => {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) app.start();
});
