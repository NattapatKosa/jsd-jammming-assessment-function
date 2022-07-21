//import TrackList.css
import './TrackList.css'

import Track from '../Track/Track'

 const TrackList = (props) => {
  const {tracks,onAdd,isRemoval,onRemove} = props
  return (
    <div className="TrackList">
    {tracks.map((track) => {
      return <Track  track ={track}  key={track.id} onAdd={onAdd} onRemove={onRemove} isRemoval={isRemoval}/>
    })}
    </div>
  )
};

export default TrackList;
