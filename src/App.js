import React from 'react';
import VideoCall from './components/VideoCall';
import Chat from './components/Chat';
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
        <h1 className="heading">Conference Video Calling App</h1>
        <Chat />
        <UserManagement />
        <Scheduler />
      </section>
      
    </body>
  );
}

export default App;











