import { Outlet } from 'react-router-dom'; // Outlet用于渲染children

const Empty = <div className='empty'><Outlet></Outlet></div>
export default Empty;