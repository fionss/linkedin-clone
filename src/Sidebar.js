import React from 'react';
import "./Sidebar.css";
import Avatar from '@mui/material/Avatar';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1568346744179-a29f1a59cc35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt=""/>
        <Avatar className="sidebar__avatar" />
        <h2>Lisa Johnson</h2>
        <h4>lisajohnson@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1243</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">3491</p>
        </div>
      </div>
      
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>

  );
}

export default Sidebar;