import React from 'react';
import { Outlet } from 'react-router-dom';
// Outlet用于渲染children
function Empty() {
  return (
    <div className="empty">
      <Outlet />
    </div>
  );
}
// const Empty = (
//   <div className="empty">
//     <Outlet />
//   </div>
// );
export default Empty;
