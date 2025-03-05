import React from 'react'
import { Link } from 'react-router-dom'
import { HouseDoor, PersonFill, EnvelopeFill, PenFill} from 'react-bootstrap-icons';

const data = [
    {
        id: 1,
        path: "/",
        label: "Home",
        icon: <HouseDoor className='inline-block' />
    },
    {
        id: 4,
        path: "/tweet",
        label: "Tweet",
        icon: <PenFill className='inline-block' />
    },
    {
        id: 2,
        path: "/profile",
        label: "Profile",
        icon: <PersonFill className='inline-block' />
    },
    {
        id: 3,
        path: "/messages",
        label: "Messages",
        icon: <EnvelopeFill className='inline-block' />
    }
]

const Header = () => {
  return (
    <aside className='col-span-1 bg-secondprimary h-full pt-4 flex flex-col gap-2 text-center'>
        {
            data.map((item) => (
                <Link to={item.path} key={item.id} className='flex ml-12' >  
                <div className='text-xl text-white font-bold flex text-center place-items-center justify-start gap-2 hover:font-extrabold active:text-gray-600' >
                    {item.icon}
                    <span className='' >{item.label}</span>
                </div>
                 </Link>        
            ))
        }
        {/* <Link to="/" >  
        <div className='text-xl text-white font-bold'>
            <HouseDoor className='inline-block' /> 
            <span>Home</span>
        </div>
         </Link>
        <Link to="/profile">
            <div className='text-xl text-white font-bold'>
            <PersonFill className='inline-block' /> 
                Profile
            </div>
        </Link>
        <Link to="/messages" className='text-xl text-white font-bold'>
        <div className='text-xl text-white font-bold'>
            <EnvelopeFill className='inline-block' /> 
                Messages
            </div>
        </Link> */}
    </aside>
  )
}

export default Header