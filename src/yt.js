import './video.css';
import React from 'react';
import VideoList from './VideoList';

const YT = () => {
  const channelId = 'UC9s2CkAjMpC4AaJROJEFQzA';

  return (
    <div>
      <h1>Chaîne Youtube Normandie</h1>
      <VideoList channelId={channelId} />
    </div>
  );
};

export default YT;