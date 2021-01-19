import { useState, useRef } from 'react';

import './styles/App.scss';

import { Song, Player, Library, Nav } from './components';
import data from './data';

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
    animationPercentage: 0,
  });

  //Event Handlers
  const timeUpdateHandler = ({ target: { currentTime, duration } }) => {
    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      animationPercentage: Math.round((currentTime / duration) * 100),
    });
  };

  const songEndHandler = async () => {
    const nextIdx =
      (songs.findIndex((song) => song.id === currentSong.id) + 1) %
      songs.length;

    // Set current song
    await setCurrentSong(songs[nextIdx]);

    // Set current song's active property
    setSongs(
      songs.map((song) => {
        return {
          ...song,
          isActive: song.id === songs[nextIdx].id,
        };
      })
    );

    //Play audio
    isPlaying && audioRef.current.play();
  };

  return (
    <div className={`app ${libraryStatus ? 'library-active' : ''}`}>
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
        onEnded={songEndHandler}
        onTimeUpdate={timeUpdateHandler}
      ></audio>
    </div>
  );
}

export default App;
