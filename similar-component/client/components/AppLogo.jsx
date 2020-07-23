import React from 'react';
const faker = require('faker');

const AppLogo = function(props) {
  return (
    <div className="col appLogo">
      <img src={props.logoUrl}/>
    </div>

  );
};

export default AppLogo;