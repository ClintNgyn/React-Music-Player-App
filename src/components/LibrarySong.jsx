const LibrarySong = ({ song: { cover, name, artist } }) => {
  return (
    <div className='library-song'>
      <img src={cover} alt='' />

      <div className='song-description'>
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
