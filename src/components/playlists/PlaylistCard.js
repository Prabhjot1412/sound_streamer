const PlaylistCard = (props) => {
  const {name, playlist} = props

  const musicWithThumbnail = playlist.filter((music) => {
    if (music.thumbnail) { 
      return true
    }

    return false
  })

  return(
    <button className="transition-all druation-200 flex m-5" style={{flexDirection: 'column'}}>
      <div className="transition-all duration-200 border border-gray-200 shadow-xl hover:shadow-2xl hover:shadow-indigo-200" style={{overflow: 'hidden', height: 400, width: 400}}>
        {console.log(playlist)}
        <div className="flex">
          {musicWithThumbnail[0] &&
            <img alt={musicWithThumbnail[0].name} src={musicWithThumbnail[0].thumbnail}
              style={{height: 200, width: 200}}
              className="border border-cyan-200 border-l-0 border-t-0"
            ></img>
          }

          {musicWithThumbnail[1] &&
            <img alt={musicWithThumbnail[1].name} src={musicWithThumbnail[1].thumbnail}
              style={{height: 200, width: 200}}
              className="border border-cyan-200 border-r-0 border-t-0"
            ></img>
          }
        </div>

        <div className="flex">
        {musicWithThumbnail[2] &&
          <img alt={musicWithThumbnail[2].name} src={musicWithThumbnail[2].thumbnail}
            style={{height: 200, width: 200}}
            className="border border-cyan-200 border-l-0 border-b-0"
          ></img>
        }

        {musicWithThumbnail[3] &&
          <img alt={musicWithThumbnail[3].name} src={musicWithThumbnail[3].thumbnail}
            style={{height: 200, width: 200}}
            className="border border-cyan-200 border-r-0 border-b-0"
          ></img>
        }
        </div>
      </div>
      <span className="transition-all duration-200 text-xl" style={{alignSelf: 'center'}}> {name.toUpperCase()}</span>
    </button>
  )
}

export default PlaylistCard
