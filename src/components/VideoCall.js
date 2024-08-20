import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faVideoSlash, faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const VideoCall = () => {
  const localVideoRef = useRef(null);
  const streamRef = useRef(null); // Store the stream here to access it later
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  useEffect(() => {
    // Access the user's webcam and microphone
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        streamRef.current = stream;
        localVideoRef.current.srcObject = stream;
      })
      .catch(error => console.error('Error accessing media devices.', error));
  }, []);

  const toggleVideo = () => {
    const videoTrack = streamRef.current.getVideoTracks()[0];
    videoTrack.enabled = !videoTrack.enabled;
    setVideoEnabled(videoTrack.enabled);
  };

  const toggleAudio = () => {
    const audioTrack = streamRef.current.getAudioTracks()[0];
    audioTrack.enabled = !audioTrack.enabled;
    setAudioEnabled(audioTrack.enabled);
  };

  return (
    <div className='mainuser'>
      <video ref={localVideoRef} autoPlay playsInline />
      <div>
        <button onClick={toggleVideo}>
          <FontAwesomeIcon icon={videoEnabled ? faVideo : faVideoSlash} /> {videoEnabled ? 'Camera On' : 'Camera Off'}
        </button>
        <button onClick={toggleAudio}>
          <FontAwesomeIcon icon={audioEnabled ? faMicrophone : faMicrophoneSlash} /> {audioEnabled ? 'Mic On' : 'Mic Off'}
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
