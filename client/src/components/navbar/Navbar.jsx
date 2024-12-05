import "./navbar.css";
import CottageIcon from '@mui/icons-material/Cottage';
import AppsIcon from '@mui/icons-material/Apps';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";


const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleProfile = () => {
    navigate(`/profile/${currentUser.id}`);
  };
  const handleHome = () => {
    navigate('/');
  };
  const handleResult = () => {
    navigate(`/search/${query}`);
  };
  const handleSetting = () => {
    navigate('/setting');
  };
  const handleFAQ = () => {
    navigate('/FAQ');
  }
  console.log(currentUser.id);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Friendify</span>
        </Link>
        <div className="hoverable-icon">
          <CottageIcon onClick={handleHome} />
        </div>
        <AppsIcon />
        <div className="hoverable-icon">
          <HelpIcon onClick={handleFAQ} />
        </div>
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
          <button onClick={handleResult}>Search</button>
        </div>
      </div>
      <div className="right">
        <div className="hoverable-icon">
          <AccountCircleIcon onClick={handleProfile} />
        </div>
        <MessageIcon />
        <NotificationsActiveIcon />
        <div className="hoverable-icon">
          <SettingsApplicationsIcon onClick={handleSetting} />
        </div>
        <div className="user">
          <img
            src={currentUser.profilePic}
            alt=""
            onClick={handleProfile}
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
