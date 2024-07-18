import React, { useState } from "react";
import style from "./Navbar.module.css"
import dropdownStyle from "../../../shared_styles/dropdown.module.css"

const Navbar = (props) => {
  const [openDropdown, setDropdown] = useState(false)

  const handleDopdown = () => {setDropdown(!openDropdown)}
  return(
    <div className={style.navbar}>
      <div className={style.holder}>
        <span className={style.item}>
          <a href="/"><i className="fa-solid fa-dice-d20" /></a> {props.logged_in && props.username}
        </span>
      </div>

      <div className={style.holder}>
        {props.logged_in &&
          <React.Fragment>
             <span className={`${style.item} ${style.first}`}>
              <a href="/logout"> Log Out <i className="fa-solid fa-arrow-right-from-bracket" /></a>
            </span >
          </React.Fragment>
        }

        { !props.logged_in &&
          <React.Fragment>
            <span className={`${style.item} ${style.first}`}>
            <a href="/login"> Log In <i className="fa-solid fa-arrow-right-to-bracket" /></a>
            </span >

            <span className={`${style.item}`}>
            <a href="/registration/new"> Sign Up <i className="fa-solid fa-user-plus" /></a>
            </span >
          </React.Fragment>
        }
        <span onMouseLeave={ () => {setDropdown(false)} } className={`${style.item} ${dropdownStyle.dropdown}`}>
            <i className="fa-solid fa-gear" onClick={handleDopdown}/>
            {
              openDropdown &&
              <div className={dropdownStyle.menu}>
                { props.admin &&
                  <a className={dropdownStyle.menu_item_last} href={props.image_view_path}><i className="fa-solid fa-image" /> Thumbnails</a>
                }
              </div>
            }
        </span >
      </div>
    </div>
  )
}

export default Navbar
