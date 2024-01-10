import React from 'react'
import "./navbar.css"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Navbar = () => (
    <div className="navbar">
        <div className="left">
            <h3>BLOOD BANK</h3>
        </div>
        <div className="right">
            <PersonOutlineIcon  className='icon'/>
            <span> Donor</span>
        </div>
    </div>
)

export default Navbar