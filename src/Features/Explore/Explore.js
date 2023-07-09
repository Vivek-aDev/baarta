import React from 'react'
import { SinglePost } from '../../Components/SinglePost/SinglePost'
import { UseData } from '../../Contexts/DataContext'
import './Explore.css'
import { useEffect } from 'react'

export const Explore = () => {
  const { dataState: { posts }, setIsLoading, isDarkMode } = UseData();
  useEffect(() => {
    window.scrollTo(0, 0)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 400)
  }, [])
  return (
    <div className='explore-container'>
      <h2 className={`text-center letter-spacing-1 explore-heading ${isDarkMode && "color-white"}`}>EXPLORE</h2>
      {
        [...posts]?.reverse()?.map(post => <SinglePost key={post._id} post={post} />)
      }
    </div>
  )
}
