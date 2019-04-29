import React from 'react';
import './style.css';
import Wrapper from '../Wrapper';
import SidebarWrapper from '../SidebarWrapper';

function TotalWrapper() {
  return (
    <div id="total" className="row">
    <div className="col s8"><Wrapper></Wrapper></div>
      <div className="col s4"><SidebarWrapper></SidebarWrapper></div>
      {/* // <div className="totalWrapper">
      //   <div className="bodyWrapper">
      //   <Wrapper></Wrapper>
      //   </div>
      //   <div className="sidebarWrapper">
      //   <SidebarWrapper></SidebarWrapper>
      //   </div>
            // </div> */}
            </div>
            );
}

export default TotalWrapper;