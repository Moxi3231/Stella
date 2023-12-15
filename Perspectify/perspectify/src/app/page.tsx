import React from 'react';
import { Button } from 'antd';

export default function Home() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#1f1f1f', // Dark background
    color: '#fff', // White text for contrast
    textAlign: 'center',
    padding: '20px'
  };

  const buttonStyle = {
    margin: '10px 0',
    borderColor: '#3e8e41', // Slightly darker border for buttons
    color: '#fff', // White text for buttons
  };

  const toolDescriptionStyle = {
    maxWidth: '600px',
    textAlign: 'left',
    marginBottom: '20px',
    color: '#ddd' // Slightly dimmer text for descriptions
  };

  return (
    <div style={appStyle}>
      <h1>Tools</h1>
      
      <div style={toolDescriptionStyle}>
        <Button type="primary" href="/Prespectify" style={buttonStyle}>
          Prespectify
        </Button>
        <p>
          Prespectify is a tool designed to generate arguments and counter-arguments. 
          It helps in developing a balanced view on various topics by providing different perspectives.
        </p>
      </div>

      <div style={toolDescriptionStyle}>
        <Button type="primary" href="/VocationalVoyager" style={buttonStyle}>
          VocationalVoyager
        </Button>
        <p>
          VocationalVoyager is an interactive career path advisor. 
          It guides users through various career options, helping them to discover and pursue their ideal career paths.
        </p>
      </div>
    </div>
  );
}
