import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  audioRef,
  songInfo,
  setSongInfo,
  isPlaying,
  setIsPlaying,
}) => {
  // State

  // Functions
  const timeBuilder = (time) => {
    return `${Math.floor(time / 60)}:${('0' + Math.floor(time % 60)).slice(
      -2
    )}`;
  };

  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const sliderHandler = ({ target: { value } }) => {
    audioRef.current.currentTime = value;
    setSongInfo({ currentTime: value, duration });
  };

  // Variables
  const { currentTime, duration } = songInfo;

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{timeBuilder(currentTime)}</p>

        <input
          type='range'
          min='0'
          max={duration}
          value={currentTime}
          onChange={sliderHandler}
        />

        <p>{timeBuilder(duration)}</p>
      </div>

      <div className='play-control'>
        <FontAwesomeIcon size='3x' className='skip-back' icon={faAngleLeft} />

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
        />
      </div>
    </div>
  );
};

export default Player;
