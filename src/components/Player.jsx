import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
  return (
    <div className='player'>
      <div className='time-control'>
        <p>start time</p>
        <input type='range' />
        <p>end time</p>
      </div>

      <div className='play-control'>
        <FontAwesomeIcon className='play' icon={faPlay} />
      </div>
    </div>
  );
};

export default Player;
