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
    <>
      <div className="video-call-section">
        <h1 className="animated-meet-3">
          <span className="animated-letter-3">M</span>
          <span className="animated-letter-3">e</span>
          <span className="animated-letter-3">e</span>
          <span className="animated-letter-3">t</span>
        </h1>
        <p><span>" </span>Connect with ease, anytime, anywhere <span>"</span></p>
      </div>

      <div className='lobby'>
        <div className='mainuser'>
          <video ref={localVideoRef} autoPlay playsInline />

          <div className='buttons'>
            <button className='camera' onClick={toggleVideo}>
              <FontAwesomeIcon icon={videoEnabled ? faVideo : faVideoSlash} /> {videoEnabled ? '' : ''}  {/*here the single inverted commas for the text with the functioning 
                                                                                                       of the camera and audio remember*/}
            </button>
            <button className='mic' onClick={toggleAudio}>
              <FontAwesomeIcon icon={audioEnabled ? faMicrophone : faMicrophoneSlash} /> {audioEnabled ? '' : ''}
            </button>
          </div>
        </div>

        <div className='frontuser'>
          <div className='user'>

          </div>

          <div className='buttons'>
            <button className='camera' onClick={toggleVideo}>
              <FontAwesomeIcon icon={videoEnabled ? faVideo : faVideoSlash} />  {/*here the single inverted commas for the text with the functioning 
                                                                                                       of the camera and audio remember*/}
            </button>
            <button className='mic' onClick={toggleAudio}>
              <FontAwesomeIcon icon={audioEnabled ? faMicrophone : faMicrophoneSlash} /> {/*here change the access to video1 using the buttons for video2*/}
            </button>
          </div>
        </div>
      </div>

      <button className='connect' title='create media'>connect</button>
      <div className='names'></div>
    </>
  );
};

export default VideoCall;
