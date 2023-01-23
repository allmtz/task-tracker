import darkIcon from "../assets/icon-dark-theme.svg"
import lightIcon from "../assets/icon-light-theme.svg"

// todo 
// figure out a way to save mode to localStorage and have the toggle be in sync 

function toggleMode(){
    document.body.classList.toggle("light")
  }

 const LightDarkToggle = () => {
    return(
        <div className="switch-container">
            <img className="mode-icon dark-icon" src={darkIcon} alt="dark icon" />
            <label className="switch">
                <input type="checkbox"  />
                <span onClick={toggleMode} className="slider round"></span>
            </label>
            <img className="mode-icon light-icon" src={lightIcon} alt="light icon" />
        </div>
    )
}

export default LightDarkToggle