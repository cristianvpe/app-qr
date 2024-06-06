import React from 'react';

const Collapse = ({ isCollapsed, children }) => {
  return (
    <div style={{ display: isCollapsed ? 'none' : 'block' }}>
      {children}
    </div>
  );
};

export default Collapse;
