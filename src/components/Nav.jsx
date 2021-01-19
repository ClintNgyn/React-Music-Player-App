import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faCompactDisc } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      {/* <FontAwesomeIcon icon={faCompactDisc} /> */}
      <h1>Music App</h1>

      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        <FontAwesomeIcon icon={faBookOpen} />
      </button>
    </nav>
  );
};

export default Nav;
