import React, { useEffect, useState } from 'react'
import { getTweets } from '../services/tweetService'
import Tweet from '../components/Tweet'

type User = { 
  _id: string,
  username: string
}

interface tweetType {
  text: string,
  user: User
}

const HomePage = () => {

  const[tweets, setTweets] = useState<tweetType[]>([])

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    getTweets()
      .then((res) => {
        if(res.status === "success"){
          setTweets(res.data);
        }
      }).catch(err => console.log(err));
  }

  return (
    <>
    <div>Feed</div>
    <div className='w-full flex flex-col gap-4 items-center'>
    {
      tweets.map((item) => (
        <Tweet text={item.text} username={item.user.username} />
      ))
    }
    </div>
    </>
  )
}

export default HomePage