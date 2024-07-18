import React, { useState } from "react";
import style from "./MainPage.module.css"
import buttonStyle from "./../../UserLogin/components/UserLogin.module.css"
import CreateProfileForm from "./CreateProfileForm";
import CreateCharacterForm from "./CreateCharacterForm";

const GreetingsSignedIn = (props) => {
  const handleModalDisplay = (e) => {
    let modal = document.getElementById('basemodal')

    if ( validateClose(e.target) ) {
      modal.style.display = 'none'
    } else {
      modal.style.display = 'block'
    }
  }

  const handleCharModalDisplay = (e) => {
    let modal = document.getElementById('basemodal2')

    if ( validateClose(e.target) ) {
      modal.style.display = 'none'
    } else {
      modal.style.display = 'block'
    }
  }

  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile)
  }

  const validateClose = (target) => {
    return (target.id == 'basemodal' || target.id == 'basemodal2' || target.id == 'close')
  }

  const [selectedProfile, setSelectedProfile] = useState(null)

  return(
    <div className={style.cont}>
      <div className={`${style.cont_item} ${style.border_right}`}>
        <h1>Profiles</h1>
        { props.profile.length == 0 &&
          <>
            <p>You don't have any profiles yet</p>
            <button
              className={buttonStyle.submit}
              onClick={ (e) => { handleModalDisplay(e) } }
            > Create now </button>
          </>
        }

        <div className={style.modal} onClick={ (e) => handleModalDisplay(e) } id="basemodal">
          <div className={style.modal_content} id="dont_close_when_clicked">
            <div style={ {textAlign: "right"} }>
              <span onClick={ (e) => handleModalDisplay(e)} id="close" className={style.close}>X</span>
            </div>
            <h1>Create new Profile</h1>
            <CreateProfileForm main_page_props={props}/>
          </div>
        </div>

        { props.profile.length > 0 &&
          <>
            {props.profile.map((profile) => {
              return(
                <div onClick={() => handleSelectProfile(profile)} key={profile.username} className={style.profile_container}>
                  <p>Profile name: {profile.username}</p>
                  <p>difficulty: {profile.difficulty}</p>
                </div>
              )
            })}

            <div
              className={style.add_profile}
              onClick={(e) => handleModalDisplay(e)}
            >
              <i className="fa-solid fa-plus"></i>
            </div>
          </>
        }

      </div>
      <div className={style.cont_item}>
        <h1>Characters</h1>
        {selectedProfile === null &&
          <h3> No profile selected </h3>
        }
        {selectedProfile !== null &&
          <React.Fragment>
            <h3>{selectedProfile.username}</h3>
            {selectedProfile.characters.map((char) => {
              return(
                <div key={char.id} className={style.character_box}>
                  <div className={style.image_box}>
                    <img src={props.images[char.avatar_name]} width="150px" height="150px"/>
                  </div>

                  <div>
                    <p> Name: <span className={style.char_details}>{char.name}</span> </p>
                    <p> class: <span className={style.char_details}>{char.char_class}</span> </p>
                    <p> lvl: <span className={style.char_details}>{char.level}</span> </p>
                    <button className={buttonStyle.submit}>Select</button>
                  </div>
                </div>
              )
            })}

            <div
              className={style.add_profile}
              onClick={(e) => handleCharModalDisplay(e)}
            >
              <i className="fa-solid fa-plus"></i>
            </div>
          </React.Fragment>
        }
        {
          selectedProfile !== null && selectedProfile.characters.length === 0 &&
          <React.Fragment>
            <p>You don't have any characters yet</p>
            <button
              id="create_char"
              className={buttonStyle.submit}
              onClick={ (e) => { handleCharModalDisplay(e) } }
            > Create now </button>
          </React.Fragment>
        }

        <div className={style.modal} onClick={ (e) => handleCharModalDisplay(e) } id="basemodal2">
          <div className={style.modal_content} id="dont_close_when_clicked">
            <div style={ {textAlign: "right"} }>
              <span onClick={ (e) => handleCharModalDisplay(e)} id="close" className={style.close}>X</span>
            </div>
            <h1>Create new Character</h1> 
            <CreateCharacterForm main_page_props={props} profile={selectedProfile}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GreetingsSignedIn
