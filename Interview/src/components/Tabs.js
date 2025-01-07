import React, { useState } from 'react'
import './Tabs.css'
import ProfileArea from './ProfileArea'

const Tabs = () => {
    const [menu,setMenu] = useState(null)
  return (
    <div className='tabs'>
    <div className="tab-area">
      <ul>
        <div className={`profile--area ${menu === 'profile'?'active':''}`} onClick={()=>setMenu('profile')}>
            <li className='profile'>Profile</li>
            <div className="profile-area">
                <ProfileArea />
            </div>
        </div>
        <div className={`Settings--area ${menu === 'Settings'?'active':''}`} onClick={()=>setMenu('Settings')}>
            <li className='Settings'>Settings</li>
            <div className="Settings-area">
            </div>
        </div>
        <div className={`Messages--area ${menu === 'Messages'?'active':''}`} onClick={()=>setMenu('Messages')}>
            <li className='Messages'>Messages</li>
            <div className="Messages-area">
            </div>
        </div>
      </ul>
    </div>
  </div>
  )
}

export default Tabs