import React from 'react';
import VideoCall from './components/VideoCall';
import UserManagement from './components/UserManagement';
import Scheduler from './components/Scheduler';
import Header from './components/Header';
import './App.css';
import Sidebar from './components/SideNavbar';


function App() {
  return (
    <body>
      <Header />

      <div className="Sidebar">
        <Sidebar />
      </div>

      <section className='Body'>
        <VideoCall />
        
        <UserManagement />
        <Scheduler />
      </section>
      
    </body>
  );
}

export default App;











