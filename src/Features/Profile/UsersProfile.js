import React from 'react'
import './Profile.css'
import { useParams } from 'react-router';
import { UseData } from '../../Contexts/DataContext';
import { SinglePost } from '../../Components/SinglePost/SinglePost';
import { followUserHandler, unfollowUserHandler } from '../../Services/UserServices';
import { useEffect } from 'react';

export const UsersProfile = () => {

  const { userhandler } = useParams();

  const { dataState: { users, posts }, dataDispatch, isDarkMode } = UseData();


  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find(el => el.username === socialUser.username)

  const socialToken = localStorage.getItem("socialToken")

  const foundUser = users?.find(el => el.userHandler === userhandler);

  const userPosts = posts?.filter(post => post.username === foundUser?.username)

  const handleFollow = (followUserId, socialToken, dataDispatch) => {
    followUserHandler(followUserId, socialToken, dataDispatch)
  }

  const handleUnfollow = (followUserId, socialToken, dataDispatch) => {
    unfollowUserHandler(followUserId, socialToken, dataDispatch)
  }

  const showFollowFollowing = (type) => {
    if (foundUser[type].length > 0) {
      dataDispatch({ type: "SHOW_FOLLOW_DETAIL_MODAL", payload: { id: foundUser?.id, type } })
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className={`profile-container flex ${isDarkMode && "bg-dark-light"}`}>
        <img src={foundUser?.profile_photo} alt="profile" className='profile-img' />

        <div className={`profile-info ${isDarkMode && "color-white"}`}>

          <div className='flex justify-between align-center profile-name-info'>
            <div>
              <h2 className='profile-user-name letter-spacing-1'>{foundUser?.firstName} {foundUser?.lastName}</h2>
              <p className={`user-name-2 letter-spacing-1 ${isDarkMode && "color-white"}`}>@{foundUser?.userHandler}</p>
            </div>

            {
              loggedInUser?.following?.some(el => el.username === foundUser?.username)
                ?
                <button onClick={() => handleUnfollow(foundUser?._id, socialToken, dataDispatch)} className={`unfollow-profile-btn letter-spacing-1 profile-btns cursor-pointer ${isDarkMode && "bg-dark-light"}`}>Unfollow</button>
                :
                <button onClick={() => handleFollow(foundUser?._id, socialToken, dataDispatch)} className={`follow-profile-btn letter-spacing-1 profile-btns cursor-pointer ${isDarkMode && "dark-hover-effect"}`}>Follow</button>
            }

          </div>

          <p className='letter-spacing-1 user-profile-status'>{foundUser?.bio}</p>

          <a href={foundUser?.link} className='user-portfolio-link letter-spacing-1' target='_blank' rel='noreferrer'>{foundUser?.link}</a>

          <div className='flex follow-details letter-spacing-1 justify-between'>
            <p><span className='font-bold'>{userPosts?.length}</span> Posts</p>
            <p onClick={() => showFollowFollowing("followers")} className='cursor-pointer'><span className='font-bold'>{foundUser?.followers?.length}</span> Followers</p>
            <p onClick={() => showFollowFollowing("following")} className='cursor-pointer'><span className='font-bold'>{foundUser?.following?.length}</span> Following</p>
          </div>

        </div>

      </div>

      <div className='posts'>
        {
          [...userPosts]?.reverse().map(post => <SinglePost key={post._id} post={post} />)
        }
      </div>
    </div>
  )
}
