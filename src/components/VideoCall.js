import React, { useEffect, useRef } from 'react';

const VideoCall = () => {
  const localVideoRef = useRef(null);

  useEffect(() => {
    // Access the user's webcam and microphone
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        localVideoRef.current.srcObject = stream;
      })
      .catch(error => console.error('Error accessing media devices.', error));
  }, []);

  return (
    <div>
      <h2>Video Call</h2>
      <video ref={localVideoRef} autoPlay playsInline />
    </div>
  );
};

export default VideoCall;
