import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import LibrarySong from './LibrarySong';

const Library = ({
  audioRef,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  libraryStatus,
  setLibraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <div className='lib-header'>
        <h2>Library</h2>

        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => setLibraryStatus(false)}
        />
      </div>

      <div className='library-songs'>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            audioRef={audioRef}
            song={song}
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
