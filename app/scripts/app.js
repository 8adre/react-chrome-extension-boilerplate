import React from 'react';
import qs from 'qs';
import 'todomvc-app-css/index.css';

// location.search
let searchObj = qs.parse(unescape(location.search.replace('?', '')));
console.log(searchObj);

chrome.storage.local.get('state', (obj) => {
  let state = obj.state;
  if (state) {
    window.state = JSON.parse(state);
  }

  let Root = require('../containers/Root');
  React.render(
    <Root />,
    document.querySelector('#root')
  );
});