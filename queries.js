var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
// var connectionString = 'postgres://localhost:5432/cms_entries';
var connectionString = 'postgres://frpcmoyzifxeyt:957c0923401d1b54e3d90fbeb3c8e901640221594dae9ab6ffa2dc4964c22c62@ec2-54-243-107-66.compute-1.amazonaws.com:5432/db6gkt2u6nh7n1';

var db = pgp(connectionString);

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
