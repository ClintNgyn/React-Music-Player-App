import './styles/App.scss';

import { Song, Player } from './components';

import data from './util';

function App() {
  return (
    <div>
      Music Player
      <Song />
      <Player />
    </div>
  );
}

export default App;
