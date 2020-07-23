import React from 'react';
import AppLogo from './AppLogo.jsx';
import AppInfo from './AppInfo.jsx';
const faker = require('faker');
const $ = require('jquery');



class AppCard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="appCard row no-gutters">
        <AppLogo logoUrl={this.props.app.logo}/>
        <AppInfo app={this.props.app}/>
      </div>
    );
  }
}

export default AppCard;


