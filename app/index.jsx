import Router from 'react-router';
import routes from 'app/routing/routes';
import React from 'react';

// Get the base styles that apply for all the app
import baseStyles from 'app/assets/stylesheets/base.styl';

// Get the index.html included in the bundle!
import page from 'file?name=index.html!./assets/index.html';

function init() {

  Router.run(routes, function (Root, state) {
    React.render(<Root/>, document.body);
  });

}

//
// Start the app (The magic starts here!!)
//
init();



