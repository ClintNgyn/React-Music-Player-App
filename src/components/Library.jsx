import LibrarySong from './LibrarySong';

const Library = ({ audioRef, songs, setSongs, setCurrentSong, isPlaying }) => {
  return (
    <div className='library'>
      <h2>Library</h2>

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
