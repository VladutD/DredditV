import React from 'react'
import './SideBar.css'
import OutboundIcon from '@mui/icons-material/Outbound';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import TvIcon from '@mui/icons-material/Tv';
import StarRateIcon from '@mui/icons-material/StarRate';
import InfoIcon from '@mui/icons-material/Info';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import HelpIcon from '@mui/icons-material/Help';
import BookIcon from '@mui/icons-material/Book';
import EngineeringIcon from '@mui/icons-material/Engineering';



export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar-wrapper">
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <OutboundIcon className="sidebar-icon" />
                    <span className="sidebar-list-item-text">Popular</span>
                </li>
                <li className="sidebar-list-item">
                    <SportsEsportsIcon className="sidebar-icon" />
                    <span className="sidebar-list-item-text">Gaming</span>
                </li>
                <li className="sidebar-list-item">
                    <SportsBasketballIcon className="sidebar-icon" />
                    <span className="sidebar-list-item-text">Sports</span>
                </li>
                <li className="sidebar-list-item">
                    <BusinessCenterIcon className="sidebar-icon" />
                    <span className="sidebar-list-item-text">Business</span>
                </li>
                <li className="sidebar-list-item">
                    <CurrencyBitcoinIcon className="sidebar-icon" />
                    <span className="sidebar-list-item-text">Crypto</span>
                </li>
                <li className="sidebar-list-item">
                    <TvIcon className="sidebar-icon" />
                    <span className="sidebar-list-item-text">Television</span>
                </li>
                <li className="sidebar-list-item">
                    <StarRateIcon  className="sidebar-icon" />
                    <span className="sidebar-list-item-text">Celebrity</span>
            </li>
            </ul>
            <button className="sidebar-btn">See more</button>
            <hr className="sidebar-hr" />

            <ul className="sidebar-list">
            <li className="sidebar-list-item">
                    <InfoIcon  className="sidebar-icon" />
                    <span className="sidebar-list-item-text">Info</span>
            </li>
            <li className="sidebar-list-item">
                    <AddToQueueIcon className="sidebar-icon" />
                    <span className="sidebar-list-item-text">Advertise</span>
            </li>
            <li className="sidebar-list-item">
                    <HelpIcon className="sidebar-icon" />
                    <span className="sidebar-list-item-text">Help</span>
            </li>
            <li className="sidebar-list-item">
                    <BookIcon className="sidebar-icon" />
                    <span className="sidebar-list-item-text">Blog</span>
            </li>
            <li className="sidebar-list-item">
                    <EngineeringIcon  className="sidebar-icon" />
                    <span className="sidebar-list-item-text">Careers</span>
            </li>
            </ul>
            <button className="sidebar-btn">See more</button>
            <hr className="sidebar-hr" />
        </div>
    </div>
  );
}
