import { useState } from 'react';

import './styles/App.scss';

import { Song, Player, Library } from './components';
import data from './util';

function App() {
  // State
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      {/* {console.log(currentSong)} */}
      <Song currentSong={currentSong} />

      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />

      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
