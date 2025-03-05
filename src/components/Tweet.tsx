import React from 'react'
import { Heart, Chat } from 'react-bootstrap-icons'

interface TweetProps {
    text: string,
    username: string
}

const Tweet: React.FC<TweetProps> = ({ text, username }) => {
  return (
    <div className='bg-white border-2 shadow-md shadow-slate-600 border-gray-400 rounded-lg w-1/2 pl-4 pr-4' >
        <div><p className='font-bold'>{username}</p></div>
        <div className='mb-2' ><p>{text}</p></div>
        <div className='grid grid-cols-3 border-t-2 border-gray-300'>
            <div className="flex flex-rows items-center gap-2">
                <Heart /> 
                <p>Like</p>
            </div>
            <div className="flex flex-rows items-center gap-2">
            <Chat /> 
               <p>Comment</p> 
            </div>
            <div>Share</div>
        </div>
    </div>
  )
}

export default Tweet