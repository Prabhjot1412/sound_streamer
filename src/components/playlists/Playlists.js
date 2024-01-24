import sortByPlaylist from '../../helpers/musicData/sortByPlaylist'
import PlaylistCard from './PlaylistCard'

const Playlists = (props) => {
  const {playlists, musicData} = props
  const sortedPlaylists = sortByPlaylist(musicData, playlists)

  return(
    <div>
      {playlists.length === 0 ? <h2> There are no playlists yet </h2> : null}

      <div className='flex flex-wrap'>
        {playlists.map((playlist, index) => {
          return(<PlaylistCard name={playlist} playlist={sortedPlaylists[playlist]} key={index} />)
        })}
      </div>
    
    </div>
  )
}

export default Playlists
