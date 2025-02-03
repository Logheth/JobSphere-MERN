import React, { useState } from 'react';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import Filter from './Filter';
const { Header, Sider, Content } = Layout;
const App = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}
      style={{position:"sticky" , overflow:"auto" , height:"100%" , top:0 }}
      >
        <div className="logo">
          {collapsed?(<h1>JS</h1>):(<h1>JobSphere</h1>)}
        </div>
        {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        /> */}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
          
          <Menu.Item key="/" icon={<UserOutlined />}>
              <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/profile" icon={<VideoCameraOutlined />}>
              <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="/appliedjob" icon={<UploadOutlined />}>
              <Link to="/appliedjob">Applied Job</Link>
          </Menu.Item>
          <Menu.Item key="/postjob" icon={<UploadOutlined />}>
              <Link to="/postjob">Post Job</Link>
          </Menu.Item>
          <Menu.Item key="/posted" icon={<UploadOutlined />}>
              <Link to="/posted">posted Job</Link>
          </Menu.Item>
          <Menu.Item key="/logout" icon={<UploadOutlined />}>
              <Link to='/login'>Logout</Link>
          </Menu.Item>

        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='site-layout-background'
          style={{
            padding: 0,
            background: colorBgContainer,
            position:"sticky" , overflow:"auto" , top:0 , zIndex:9999
          }}>

          <div className='flex justify-content-between'>

            <div>
              <Button
              className='header-button'
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            </div>
            <div>
                <Filter/>
            </div>
            <div>
               <h5 className='user-name'>{user.username}</h5>
            </div>

          </div>

        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;

