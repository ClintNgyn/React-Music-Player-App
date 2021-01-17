import { useState } from 'react';

import './styles/App.scss';

import { Song, Player } from './components';
import data from './util';

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrrentSong] = useState(songs[0]);

  return (
    <div>
      {/* {console.log(currentSong)} */}
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
