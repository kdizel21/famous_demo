 var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise,
  error: function error(_error, e) {
      if (e.cn) {
          // A connection-related error;
          //
          // Connections are reported back with the password hashed,
          // for safe errors logging, without exposing passwords.
          console.log("CN:", e.cn);
          console.log("EVENT:", _error.message || _error);
      }
  }
};

var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/cms_entries'

var db = pgp(connectionString);

db.connect()
  .then(function(obj) {
    obj.done();
  })
  .catch(function(error) {
    console.log("ERROR:", error.message || error);
  })

// add query functions

module.exports = {
  getAllEntries: getAllEntries,
  getAllEntriesTest: getAllEntriesTest,
  getSingleEntry: getSingleEntry,
  createEntry: createEntry,
  updateEntry: updateEntry,
  removeEntry: removeEntry
};

function getAllEntries(callback) {
  db.any('select * from entries')
    .then(function (data) {
      if(callback)
        callback(data)

      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL entries'
        });
    })
    .catch(function (err) {
      return {
        error: err
      };
    });
}

function getAllEntriesTest(req,res,next) {
  db.any('select * from entries')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL entries'
        });
    })
    .catch(function (err) {
      return {
        error: err
      };
    });
}

function getSingleEntry(req, res, next) {
  var entryId = parseInt(req.params.id);
  db.one('select * from entries where id = $1', entryId)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE entry'
        });
    })
    .catch(function (err) {
      return {
        error: err
      };
    });
}

function createEntry(req, res, next) {
  req.body.age = parseInt(req.body.age);
  db.none('insert into entries(headerText)' +
      'values(${headerText})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one entry'
        });
    })
    .catch(function (err) {
      return {
        error: err
      };
    });
}

function updateEntry(req, res, next) {
  console.log(req.body.headerText)
  db.none('update entries set headerText=$1 where id=$2',
    [req.body.headerText,
      parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated entry'
        });
    })
    .catch(function (err) {
      return {
        error: err
      };
    });
}

function removeEntry(req, res, next) {
  var entryId = parseInt(req.params.id);
  db.result('delete from entries where id = $1', entryId)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} entry`
        });
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return {
        error: err
      };
    });
}
