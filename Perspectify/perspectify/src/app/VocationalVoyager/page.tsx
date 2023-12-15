"use client";

// App.js
import React, { useState } from 'react';
import { Button, Card, message, Layout, Menu } from 'antd';
import {
  SmileOutlined,
  MehOutlined,
  FrownOutlined,
  LeftOutlined,
  RightOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import EducationalContent from './components/educational_background';

const { Content, Sider } = Layout;

const steps = [
  {
    title: 'Education',
    content: <EducationalContent/>,
    icon: <SmileOutlined />,
  },
  {
    title: 'Second',
    content: 'Second-content',
    icon: <MehOutlined />,
  },
  {
    title: 'Last',
    content: 'Last-content',
    icon: <FrownOutlined />,
  },
];

const AppHeader = () => {
  return (
    <Layout.Header style={{
      background: '#EEE2DC',
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h2 style={{ color: '#333' }}>VocationalVoyager</h2>
    </Layout.Header>
  );
};

const App = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  return (
    <>
      <AppHeader />
      <Layout style={{ minHeight: '100vh', background: '#fff' }}>
        <Sider style={{ background: '#f0f2f5' }}>
          <Menu mode="inline" selectedKeys={[`${current}`]}>
            {steps.map((step, index) => (
              <Menu.Item key={index} onClick={() => setCurrent(index)} icon={step.icon}>
                {step.title}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px', padding: '20px' }}>
            <Card title={steps[current].title} bordered={false}>
              {steps[current].content}
            </Card>
            <div style={{ marginTop: '16px', textAlign: 'right' }}>
              {current > 0 && (
                <Button style={{ marginRight: '8px' }} onClick={prev} icon={<LeftOutlined />}>
                  Previous
                </Button>
              )}
              {current < steps.length - 1 && (
                <Button type="primary" onClick={next} icon={<RightOutlined />}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')} icon={<CheckCircleOutlined />}>
                  Done
                </Button>
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default App;
