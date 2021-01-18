const LibrarySong = ({ song, setCurrentSong }) => {
  // Variables
  const { id, cover, name, artist } = song;

  // Events Handler
  const songSelectHandler = () => {
    setCurrentSong(song);
  };

  return (
    <div onClick={songSelectHandler} className='library-song'>
      <img src={cover} alt='' />

      <div className='song-description'>
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
