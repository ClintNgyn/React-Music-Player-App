import { useState, useRef } from 'react';

import './styles/App.scss';

import { Song, Player, Library, Nav } from './components';
import data from './util';

function App() {
  const audioRef = useRef(null);

  // State
  const [libraryStatus, setLibraryStatus] = useState(false);
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
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />

      <Song currentSong={currentSong} onClick={() => setLibraryStatus(false)} />

      <Player
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        onClick={() => setLibraryStatus(false)}
      />

      <Library
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
        onClick={() => setLibraryStatus(false)}
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
