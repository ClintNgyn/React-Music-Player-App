import { useState, useRef } from 'react';

import './styles/App.scss';

import { Song, Player, Library } from './components';
import data from './util';

function App() {
  const audioRef = useRef(null);

  // State
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  //Event Handlers
  const timeUpdateHandler = ({ target: { currentTime, duration } }) => {
    setSongInfo({ currentTime, duration });
  };

  return (
    <div>
      {/* {console.log(currentSong)} */}
      <Song currentSong={currentSong} />

      <Player
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      <Library
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />

      <audio
        src={currentSong.audio}
        ref={audioRef}
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
      ></audio>
    </div>
  );
}

export default App;
