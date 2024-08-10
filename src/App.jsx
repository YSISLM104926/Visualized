
import React from 'react';
import { Toaster } from 'sonner'
import './App.css'
import Dashboard from './components/Dashboard'

import Navbar from './shared/Navbar'
const App = () => {

  return (
    <>
      <Toaster />
      <Navbar />
      <Dashboard />
    </>
  );
}

export default App;