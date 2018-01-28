// Import libraries to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header.js';

// Create component
const App = () => {
  return (
    <Header />
  );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
