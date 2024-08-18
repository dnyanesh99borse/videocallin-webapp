import React from 'react';
import VideoCall from './components/VideoCall';
import Chat from './components/Chat';
import UserManagement from './components/UserManagement';
import Scheduler from './components/Scheduler';
import './App.css';
import Header from './components/Header';



function App() {
  return (
    <div className="chirag">
      <Header />
      <h1 className="heading">Conference Video Calling App</h1>
      <Chat />
      <UserManagement />
      <Scheduler />
      <Sidebar /> <Sidebar />
      <VideoCall />
     
    </div>
  );
}

export default App;

function Sidebar() {
  return (
    <div>
      <h1>HEY BILLIONAIRE...</h1>
    </div>
  );
}








