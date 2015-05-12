import Router from 'react-router';
import React from 'react';

import PublicContent from 'app/views/layout/public_content';
import HomeViewController from 'app/views/home/home_view_controller';

let Route = Router.Route;
let NotFoundRoute = Router.NotFoundRoute;

// declare our routes and their hierarchy
let routes = [
  <Route handler={PublicContent}>
    <Route name="home" path="home" handler={HomeViewController} />
  </Route>
];


export default routes;
