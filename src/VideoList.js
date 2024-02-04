import './video.css';
import React, { useEffect, useState } from 'react';
import { API_KEY } from './config';
import axios from 'axios';

const VideoList = ({ channelId }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            channelId: channelId,
            part: 'snippet',
            type: 'video',
          },
        });

        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching data from YouTube API:', error);
      }
    };

    fetchData();
  }, [channelId]);

  return (
    <div className='video-list-container'>
      {videos.map(video => (
        <div key={video.etag} className='video-item'>
          <iframe
            title={video.snippet.title}
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoList;