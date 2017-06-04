var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/cms_entries';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllEntries: getAllEntries,
  getSingleEntry: getSingleEntry,
  createEntry: createEntry,
  updateEntry: updateEntry,
  removeEntry: removeEntry
};

function getAllEntries(req, res, next) {
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
      return next(err);
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
      return next(err);
    });
}

function createEntry(req, res, next) {
  // req.body.age = parseInt(req.body.age);
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
      return next(err);
    });
}

function updateEntry(req, res, next) {
  db.none('update entries set headerText=$1 where id=$5',
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
      return next(err);
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
      return next(err);
    });
}
