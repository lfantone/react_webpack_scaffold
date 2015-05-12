import React from 'react';
import Router from 'react-router';

let RouteHandler = Router.RouteHandler;

export default class PublicContent extends React.Component {

  render() {
    return (
      <div id="application">
        <h1>Public Content Wrapper</h1>
        <p>Check your 'app/routing/routes' file to see what routes you have available</p>
        <RouteHandler/>
      </div>
    );
  }

};
