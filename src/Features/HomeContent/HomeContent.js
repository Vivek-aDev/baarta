import React, { useEffect } from 'react'
import { SinglePost } from '../../Components/SinglePost/SinglePost'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { MdOpenInNew } from 'react-icons/md'
import './HomeContent.css'
import { FollowBar } from '../../Components/FollowBar/FollowBar'
import { UseData } from '../../Contexts/DataContext'
import { useState } from 'react'
export const HomeContent = () => {
  const { dataState: { posts, users }, isDarkMode, dataDispatch } = UseData();
  const [postsType, setPostsType] = useState("latest");

  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find(el => el.username === socialUser.username)


  const openPostModel = () => {
    dataDispatch({ type: "SHOW_POST_MODAL" })
  }


  const loggedInUserPosts = posts?.filter(post => post?.username === loggedInUser?.username);

  const homePosts = posts?.filter(post => loggedInUser?.following?.some(el => el.username === post.username));

  // For trending
  const likedPosts = posts?.filter(post => loggedInUser?.following?.some(el => el?.username === post?.username) || loggedInUser?.username === post?.username);

  const sortPostsByLikes = likedPosts?.sort((a, b) => b?.likes?.likeCount - a?.likes?.likeCount)

  const postsByType = postsType === "latest" ? [...loggedInUserPosts, ...homePosts].sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt)) : postsType === "oldest" ? [...loggedInUserPosts, ...homePosts].sort((a, b) => new Date(a?.createdAt) - new Date(b?.createdAt)) : sortPostsByLikes;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className={`flex justify-between add-post-bar align-center ${isDarkMode && "bg-dark-light color-white"}`}>
        <p className={`add-post-text flex align-center ${isDarkMode && "bg-dark-light color-white"}`}>
          <span className='addpost-profile-icon'>
            <img src={loggedInUser?.profile_photo} alt="user-img" className='user-image' />
          </span>
          <span className='add-post-text letter-spacing-1  cursor-pointer' onClick={openPostModel}>What is happening?</span>
        </p>
        <span className='addpost-plus-icon  cursor-pointer' onClick={openPostModel}>
          <AiFillPlusCircle className='plus-icon' />
        </span>
      </div>

      <div className={`flex justify-around trending-latest-box ${isDarkMode && "bg-dark-light"}`}>

        <div className="latest-box">
          <button onClick={() => setPostsType("latest")} className={`latest-btn letter-spacing-1 cursor-pointer ${postsType === "latest" && "type-active"} ${isDarkMode && "bg-dark-light"}`} ><MdOpenInNew /><span className='padding-left-03'>Latest</span></button>
        </div>

        <div className='trending-mid-line'></div>

        <div className='trending-box flex align-center'>
          <button onClick={() => setPostsType("oldest")} className={`trending-btn letter-spacing-1 cursor-pointer ${postsType === "oldest" && "type-active"} ${isDarkMode && "bg-dark-light"}`}><BiTrendingUp /><span className='padding-left-03'>Oldest</span></button>
        </div>

        <div className='trending-mid-line'></div>

        <div className='trending-box flex align-center'>
          <button onClick={() => setPostsType("trending")} className={`trending-btn letter-spacing-1 cursor-pointer ${postsType === "trending" && "type-active"} ${isDarkMode && "bg-dark-light"}`}><BiTrendingUp /><span className='padding-left-03'>Trending</span></button>
        </div>
      </div>

      <div className='hide-follow-on-lg'>
        <FollowBar />
      </div>


      {
        postsByType?.length > 0 && <div className='posts'>
          {
            postsByType?.map(post => <SinglePost key={post._id} post={post} />)
          }
        </div>
      }
      {
        likedPosts?.length === 0 && postsType === "trending" &&
        <h2 className={`likes-posts-heading text-center ${isDarkMode && "color-white"}`}>Liked Some Posts To See Trending</h2>
      }
    </div>
  )
}
