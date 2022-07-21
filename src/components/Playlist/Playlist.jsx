//import Playlist.css
import './Playlist.css';

import TrackList from '../TrackList/TrackList'

 const Playlist = (props) => {
  const {playListTracks,onRemove,onNameChange,onSave} = props
  const handleNameChange= (event) => {
    onNameChange(event.target.value);
  }
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} onChange={handleNameChange}/>
      <TrackList tracks= {playListTracks} onRemove={onRemove} isRemoval={true}/>
      <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist