const LibrarySong = ({
  audioRef,
  song,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
}) => {
  // Variables
  const { id, cover, name, artist, isActive } = song;

  // Events Handler
  const songSelectHandler = () => {
    setCurrentSong(song);

    //set active song highlight
    setSongs(() => {
      return songs.map((song) => {
        return { ...song, isActive: song.id === id };
      });
    });

    // Wait for audio to load
    isPlaying &&
      (async () => {
        await audioRef.current.play();
        audioRef.current.play();
      })();
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${isActive ? 'selected' : ''}`}
    >
      <img src={cover} alt='' />

      <div className='song-description'>
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
