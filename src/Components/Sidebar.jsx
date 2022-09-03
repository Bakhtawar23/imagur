import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Sidebar = () => {

  return (
    <>
    <div className="sidebar">
        <li><button className='menu'><MenuIcon/></button>SMARTUP</li>
        <hr></hr>
        <li>Profile</li>
        <li>Discover</li>
        <li>Man Community</li>
        <li>Fun Community</li>
        <li>Tech Community</li>
        <li>Personal</li>
        
        <div className="about">
          <hr></hr>
          <li>About SmartUp</li>
          <li>Send Feedback</li>
          <li>Terms of Use</li>
          <li>Privary policy</li>
        </div>
        
        <div className="contact">
          <div className="contact-box">
          <YouTubeIcon/>
          <FacebookIcon/>
          <TwitterIcon/>
          <LinkedInIcon/>
          </div>
        </div>
    </div>
    </> 
  )
}

export default Sidebar;
