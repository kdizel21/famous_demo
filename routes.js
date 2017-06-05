const express = require('express');
const router = express.Router();
const db = require('./queries');

import qs from 'qs';
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server';
import reducers from './src/assets/js/reducers';
import MainComponent from "./src/assets/js/main/components/main.js";
// import App from './src/assets/js/app.js';

router.get('/api/entries', db.getAllEntries);
router.get('/api/entriesTest', db.getAllEntriesTest);
router.get('/api/entries/:id', db.getSingleEntry);
router.post('/api/entries', db.createEntry);
router.put('/api/entries/:id', db.updateEntry);
router.delete('/api/entries/:id', db.removeEntry);

db.getAllEntries(function(data) {
  //Testing
  //TODO retrieve all entries in db
  console.log(data)
  const store = createStore(reducers, {editor:{headerText: data[0].headertext}});

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <MainComponent />
    </Provider>
  )
  // Grab the initial state from our Redux store
  const finalState = store.getState();

  // Send the rendered page back to the client
  router.get('/', function (req, res) {
    res.render('./index', {app: html, initState:finalState})
  })
});

module.exports = router;