import React from 'react';
import { Layout, Typography } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <Header style={{
      background: '#557A95', 
      padding: '0 24px', 
      display: 'flex', 
      alignItems: 'center',
      boxShadow: '0 2px 8px #f0f1f2' // subtle shadow for depth
    }}>
      <Title level={2} style={{ 
        margin: 0, 
        color: 'rgba(0, 0, 0, 0.85)' // dark color for contrast
      }}>
        VocationalVoyager
      </Title>
    </Header>
  );
};

export default AppHeader;
