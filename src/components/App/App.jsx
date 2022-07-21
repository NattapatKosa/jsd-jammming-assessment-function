//import App.css
import "./App.css";
import { useState } from "react";

//import 3 components
import  SearchBar  from '../SearchBar/SearchBar';
import  SearchResults  from '../SearchResults/SearchResults';
import  Playlist  from '../Playlist/Playlist';
import { useEffect } from "react";
import Spotify from '../../utils/Spotify';

const App = () => {
  const [searchResults, setSearchResults] = useState([
    // { name: 'name1', artist: 'artist1', album: 'album1', id: '1' },
    // { name: 'name2', artist: 'artist2', album: 'album2', id: '2' },
    // { name: 'name3', artist: 'artist3', album: 'album3', id: '3' }
  ]);
  const [playListName, setPlayListName] = useState('')
  const [playListTracks, setPlayListTracks] = useState([
      // { name: 'playlistname1', artist: 'playlistartist1', album: 'playlistalbum1', id: '4' },
      // { name: 'playlistname2', artist: 'playlistartist2', album: 'playlistalbum2', id: '5' },
      // { name: 'playlistname3', artist: 'playlistartist3', album: 'playlistalbum3', id: '6' }
    ]);
  useEffect(()=>{
    const accessToken = Spotify.getAccessToken()
  },[])
  const addTrack = (track) => {
    let tracks =  playListTracks 
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlayListTracks(prevSavedTrack => {
      return [track, ...prevSavedTrack]
    })
  }
  const removeTrack = (track) => {
    let tracks =  playListTracks
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
    setPlayListTracks(tracks);
  }
  const updatePlaylistName = (name) => {
    setPlayListName(name)
  }
  const savePlaylist = () => {
    const trackURIs = playListTracks.map(track=> track.uri);
    Spotify.savePlaylist(playListName,trackURIs).then(() => {
      setPlayListName('New Playlist')
      setPlayListTracks([])
    })
  }
  const search = (term) => {
    Spotify.search(term).then(results => {
      setSearchResults(results)
    });
  }
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist 
          playListName={playListName} 
          playListTracks={playListTracks} 
          onRemove={removeTrack} 
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}/>
        </div>
      </div>
    </div>
  );
};

export default App;
