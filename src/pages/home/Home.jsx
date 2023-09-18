import React from 'react'
import './Home.css'
import SideBar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
import TopBar from '../../components/topbar/TopBar'



export default function Home() {
  return (
    <>

     
    
        <div className="home-container">
        <SideBar />
        <Feed />
        <RightBar />
        
        </div>
        
    </>
  )
}
