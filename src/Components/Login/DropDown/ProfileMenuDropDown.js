import "./ProfileMenuDropDown.css";
import Logout from "../../../Assets/log-out.png";
import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function ProfileMenuDropDown() {
 
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [dataLetters, setDataLetters] = useState("");

  const navigateToHome = () => {
    navigate('/'); // Replace '/target-page' with your route
  };
  
  useEffect(() => {
    // Fetch the value from local storage when the component mounts
    const storedObject = JSON.parse(localStorage.getItem("loginData"));
    var initials = storedObject.initials;

    if (initials) {
      setDataLetters(initials);
    }
  }, []);

  return (
    <>


      <div className="logoutContainer">
        <a data-letters={dataLetters} onClick={()=>{setOpen(!open)}}></a>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
          <h3>The Kiet<br/><span>Website Designer</span></h3>
          <ul>
            <DropdownItem img={Logout} text={"Logout"}></DropdownItem>
          </ul>
        </div>
      </div>
      
    </>
  );

  
function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img}></img> 
      <a onClick={clearLogout}>{props.text} </a>
    </li>
  );
}


function clearLogout(){
  localStorage.clear()
  window.dispatchEvent(new Event("storage"));
  navigateToHome()
}

}


export default ProfileMenuDropDown;
