import { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong: { audio }, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className='player'>
      <div className='time-control'>
        <p>start time</p>

        <input type='range' />

        <p>end time</p>
      </div>

      <div className='play-control'>
        <FontAwesomeIcon size='2x' className='skip-back' icon={faAngleLeft} />

        <FontAwesomeIcon
          onClick={playSongHandler}
          size='2x'
          className='play'
          icon={faPlay}
        />

        <FontAwesomeIcon
          size='2x'
          className='skip-forward'
          icon={faAngleRight}
        />
      </div>

      <audio ref={audioRef} src={audio}></audio>
    </div>
  );
};

export default Player;
