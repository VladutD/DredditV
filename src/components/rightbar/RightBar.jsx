import React from 'react'
import './RightBar.css'

export default function RightBar() {
  return (
   
    <div className="rightbar-container">
       
        <div className="right-wrapper">
          <div className="right-bar">
          <img className="right-bar-adds" src={require("../../assets/posts/adds1.jpeg")} alt="perfume" />
          </div>
          <div className="right-communities">
            <h4 className="communities">Popular Communities</h4>
            <ul className="right-bar-communities">
              <li className="right-list-communities">
                <div className="right-list-communities-img">
                  <img className="rightcommunities-profile" src={require("../../assets/person/person2.jpeg")} />
                  <span className="communities-name">r/Ask/Reddit</span>
                  <span className="communities-info">42,998,337 members</span>
                </div>
              </li>

              <li className="right-list-communities">
                <div className="right-list-communities-img">
                  <img className="rightcommunities-profile" src={require("../../assets/person/person7.jpeg")} />
                  <span className="communities-name">r/Travel</span>
                  <span className="communities-info">23,998,337 members</span>
                </div>
              </li>

              <li className="right-list-communities">
                <div className="right-list-communities-img">
                  <img className="rightcommunities-profile" src={require("../../assets/person/person6.jpeg")} />
                  <span className="communities-name">r/Nature/World</span>
                  <span className="communities-info">44,308,337 members</span>
                </div>
              </li>

              <li className="right-list-communities">
                <div className="right-list-communities-img">
                  <img className="rightcommunities-profile" src={require("../../assets/person/person5.jpeg")} />
                  <span className="communities-name">r/games/Reddit</span>
                  <span className="communities-info">39,108,437 members</span>
                </div>
              </li>
            </ul>
            <button className="right-btn">See more</button>
            <hr className="right-hr" />
          </div>
        </div>
    </div>
  )
}
