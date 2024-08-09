import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import TableApp from './Table';
import { MdDashboard } from 'react-icons/md';
import ChartComponent from './ChartComponent';
import DashboardStats from './DashboardStats';
import { IoMdAdd } from 'react-icons/io';
import { Outlet, useNavigate } from 'react-router-dom';
const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Dashboard', '1', <MdDashboard />),
  getItem('Add Data', '2', <IoMdAdd />)
];
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    if (key === '1') {
      navigate('/dashboard');
    } else if (key === '2') {
      navigate('/dashboard/add-data');
    }
  };
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleMenuClick} />
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              padding: 0,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;