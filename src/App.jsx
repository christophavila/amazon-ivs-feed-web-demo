import React, { useEffect, useState } from 'react';
import Feed from './components/feed';

const feedJSON = `${process.env.PUBLIC_URL}/feed.json`;

const App = () => {
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    async function fetchStreams() {
      const response = await fetch(feedJSON);
      const data = await response.json();

      setStreams(data.streams);
    }

    fetchStreams();
  }, []);
  
  
  return (
    <div className="App">
        <ReactHlsPlayer
        <Feed streams={streams} />
        autoplay={false}
        controls={true}
        width="100%"
        height="auto"
        />  
    </div>
  );
};

export default App;
