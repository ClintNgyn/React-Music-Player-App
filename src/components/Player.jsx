import { useRef, useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong: { audio }, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

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

  const timeUpdateHandler = (evt) => {
    const { currentTime, duration } = evt.target;
    setSongInfo({ currentTime, duration });
  };

  // Variables
  const { currentTime, duration } = songInfo;

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{timeBuilder(currentTime)}</p>

        <input type='range' />

        <p>{timeBuilder(duration)}</p>
      </div>

      <div className='play-control'>
        <FontAwesomeIcon size='2x' className='skip-back' icon={faAngleLeft} />

        <FontAwesomeIcon
          size='2x'
          className='play'
          icon={faPlay}
          onClick={playSongHandler}
        />

        <FontAwesomeIcon
          size='2x'
          className='skip-forward'
          icon={faAngleRight}
        />
      </div>

      <audio
        src={audio}
        ref={audioRef}
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
      ></audio>
    </div>
  );
};

export default Player;
