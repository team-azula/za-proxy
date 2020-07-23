import React from 'react';
import {TiStarFullOutline} from 'react-icons/ti';
import {TiStarHalfOutline} from 'react-icons/ti';
import {TiStarOutline} from 'react-icons/ti';

const Stars = function(props) {

  var starz = [];

  Math.random();

  for (var i = 0; i < Math.floor(props.rating); i++) {
    starz.push(<TiStarFullOutline key={Math.random()}/>);
  }

  if (props.rating % 1 !== 0) {
    starz.push(<TiStarHalfOutline key={Math.random()}/>);
  }

  while (starz.length !== 5) {
    starz.push(<TiStarOutline key={Math.random()}/>);
  }

  return (
    <span>
      {starz}
    </span>
  );
};

export default Stars;