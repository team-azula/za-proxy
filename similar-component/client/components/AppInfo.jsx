import React from 'react';
import Stars from './Stars.jsx';

const AppInfo = function(props) {
  return (
    <div className="col right-side">
      <div className="appInfo">
        <p className="appName mb-0">{props.app.name}</p>
        <p className="company mb-0">{props.app.company}</p>
        <p className="description mt-9 mb-0">{props.app.description}</p>
      </div>
      <div className="rating"><Stars rating={props.app.rating}/></div>
    </div>
  );
};

export default AppInfo;