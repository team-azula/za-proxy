import React from 'react';

const Header = function() {
  return (
    <div className="header row no-gutters">
      <div className="similar col"><div className="similar">Similar</div></div>
      <div className="btn-col col"><button className='seemore-btn'>See more</button></div>
    </div>
  );
};

export default Header;