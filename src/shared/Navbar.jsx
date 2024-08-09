import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Navbar = () => {
  const navigate = useNavigate();
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const { Logout, isLoggedIn } = useContext(AuthContext);
  
  const handleLogout = async() => {
    await Logout();
    navigate('/');
  }

  return (
    <>
      <div className="navbar bg-[#001529]">
        <div className="flex-1">
          <a className="text-2xl font-bold text-white ms-5">Visualized</a>
          <div className='flex lg:gap-6 lg:ms-10'>
            {
              isLoggedIn?.status  &&
              <>
                <button className='underline text-lg text-white'><Link to='/dashboard'>Dashboard</Link></button>
              </>
            }
          </div>
        </div>

        {
          isLoggedIn?.status  &&
          <>
            <h1 className='text-white mr-2 underline'>{isLoggedIn?.userEmail}</h1>
            <div className="flex-none me-20 z-50">
              <div>
                <div className="drawer drawer-end">
                  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button hover:cursor-pointer"><Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /></label>
                  </div>
                  <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                      {/* Sidebar content here */}
                      <li><a>Setting</a></li>
                      <li><button onClick={handleLogout}>Logout</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default Navbar