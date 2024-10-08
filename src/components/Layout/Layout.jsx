import { Layout, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export default function MainLayout({ children }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className='min-h-screen bg-white' >
      <div className="bg-violet-100  flex items-center w-full  px-3">
        <Navbar />
      </div>
      <Content className='lg:px-10 mt-5' >
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Content style={{ padding: '0 24px', minHeight: '80vh' }}>
          {children}</Content>
        </Layout>
      </Content>
      <div className="bg-violet-100  flex items-center justify-center w-full px-3">
        <Footer />
      </div>
    
    </Layout>
  );
}
