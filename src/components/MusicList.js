import { useEffect, useState } from "react"
import Play from "../icons/Play"

const MusicList = (props) => {
  const {musicData} = props
  const [activeSong, setActiveSong] = useState({})
  const [audioDisplay, setAudioDisplay] = useState(0)
  const [showAudio, setShowAudio] = useState(false)

  useEffect(() => {
    if (!musicData) {
      return
    }

    setActiveSong(musicData[0])
  })

  setInterval(() => {
    if(showAudio === true) {
      setShowAudio(false)
      return
    }

    setAudioDisplay(0)
  }, 5000)

  return(
    <div>
      <div style={{padding: 30, display: "flex", flexDirection: "column", width: "90%", height: 700}} className="ml-10 rounded-lg bg-indigo-100 transition ease-in-out delay-500"
        onMouseOver={() => {setShowAudio(true); setAudioDisplay(1)}}
      >
        <p className="text-4xl font-bold mb-10"> {activeSong.name}</p>
        <img src={activeSong.thumbnail} alt="thumbnail" className="mb-5" style={{alignSelf: "center", Width: 500, maxHeight: 500}} 
          onMouseOver={() => {setShowAudio(true); setAudioDisplay(1)}} />

        <audio alt="song" style={{opacity: audioDisplay}} className="w-full transition-all delay-200 ease-in-out " src={activeSong.url} controls autoPlay/>
      </div>

      <hr className="mt-5" style={{border: ".5px solid"}}/>

      <div style={{padding: 5}}>
        {musicData && musicData.map((music) => {
          return(
            <div className="rounded-lg bg-cyan-100 flex" style={{justifyContent: "space-between"}}>
                <div className="flex">
                  <img className="rounded-md mr-5" alt="thumbail" src={music.thumbnail} style={{height: 50, width: 50}}/>

                  <span className="mt-2" style={{padding: "5px"}}>
                    {music.name}
                  </span>
                </div>

                <div className="bg-cyan-100" style={{padding: "10px", paddingTop: 12}}>
                  <Play w="6" h="6" />
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MusicList