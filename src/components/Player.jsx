import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  audioRef,
  songs,
  setSongs,
  songInfo,
  setSongInfo,
  currentSong: { id },
  setCurrentSong,
  isPlaying,
  setIsPlaying,
}) => {
  // Functions
  const timeStampBuilder = (time) => {
    return `${Math.floor(time / 60)}:${('0' + Math.floor(time % 60)).slice(
      -2
    )}`;
  };

  //Event Handlers
  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const sliderHandler = ({ target: { value } }) => {
    audioRef.current.currentTime = value;
    setSongInfo({ currentTime: value, duration });
  };

  const skipTrackHandler = (dir) => {
    let currIdx = songs.findIndex((song) => song.id === id);
    currIdx =
      dir === 'back'
        ? currIdx - 1 < 0
          ? songs.length - 1
          : currIdx - 1
        : (currIdx + 1) % songs.length;

    setCurrentSong(songs[currIdx]);

    setSongs(
      songs.map((song) => {
        return {
          ...song,
          isActive: song.id === songs[currIdx].id,
        };
      })
    );
  };

  // Variables
  const { currentTime, duration } = songInfo;

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{timeStampBuilder(currentTime || 0)}</p>

        <input
          type='range'
          min='0'
          max={duration || 0}
          value={currentTime}
          onChange={sliderHandler}
        />

        <p>{timeStampBuilder(duration || 0)}</p>
      </div>

      <div className='play-control'>
        <FontAwesomeIcon
          size='3x'
          className='skip-back'
          icon={faAngleLeft}
          onClick={() => skipTrackHandler('back')}
        />

        <FontAwesomeIcon
          size='2x'
          className='play'
          icon={isPlaying ? faPause : faPlay}
          onClick={playSongHandler}
        />

        <FontAwesomeIcon
          size='3x'
          className='skip-forward'
          icon={faAngleRight}
          onClick={() => skipTrackHandler('forward')}
        />
      </div>
    </div>
  );
};

export default Player;
