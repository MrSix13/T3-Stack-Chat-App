import { useState } from 'react'
import {IoMoonOutline, IoChatboxOutline } from 'react-icons/io5'
import Chat from '../../controllers/Chat/Chat';
import IconButton from '../IconButton/IconButton'


export default function Navbar(){
    const [showChat, setShowChat] = useState(false);
    console.log(showChat)
    return(
        <nav className="fixed top-0 z-50 flex h-14 w-full items-center justify-end space-x-2 bg-level1 px-4 shadow-sm">
            <IconButton>
                <IoMoonOutline/>
            </IconButton>
            <IconButton 
               shouldFill={showChat}
            >
                <IoChatboxOutline onClick={()=>setShowChat((chat)=>!chat)}/>
            </IconButton>
            {showChat && <Chat/>}
            <div className='flex h-10 w-10 items-center justify-center'>
                <img 
                src="https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_rounded-512.png" 
                alt="avatar"
                className='h-8 w-8 roundend-full' 
                />
            </div>
        </nav>
    )
}