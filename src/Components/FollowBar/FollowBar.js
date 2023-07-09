import React from 'react'
import './FollowBar.css'
import { UseData } from '../../Contexts/DataContext'
import { useNavigate } from 'react-router';
import { followUserHandler } from '../../Services/UserServices';
export const FollowBar = () => {
  const { dataState: { users }, dataDispatch, isDarkMode, setIsLoading } = UseData();

  const navigate = useNavigate();

  const socialToken = localStorage.getItem("socialToken");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find(el => el?.username === socialUser?.username)

  const handleUserProfile = (userHandler) => {
    navigate(`/user-profile/${userHandler}`)
    window.scrollTo(0, 0)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }

  const handleFollowUser = (followUserId, socialToken, dataDispatch) => {
    followUserHandler(followUserId, socialToken, dataDispatch)
  }

  // bcz we don't want loggedIn user as followed user
  const notFollowedUsers = users?.filter(el => el?.username !== loggedInUser?.username && loggedInUser?.following?.every(item => item?.username !== el.username));


  return (
    <div className={`followbar-main-container ${isDarkMode && "bg-dark"}`}>
      <div className={`followbar-container flex  align-center ${isDarkMode && "bg-dark"}`}>
        <h2 className='letter-spacing-1 follow-header'>Who to follow</h2>

        {notFollowedUsers?.map(user => {
          const { _id, firstName, lastName, userHandler, profile_photo } = user
          return (
            <div key={_id} className={`flex justify-between follow-user-card ${isDarkMode && "bg-dark-light  border-color-dark"}`}>
              <div className='flex followbar-card-inner align-center'>
                <span className='follow-user-profile cursor-pointer' onClick={() => handleUserProfile(userHandler)}>
                  <img src={profile_photo} className='follow-user-img ' alt="user-img" /></span>
                <div onClick={() => handleUserProfile(userHandler)} className={`cursor-pointer ${isDarkMode && "color-white"}`}>
                  <h4 className='follow-user-name text-center' >{firstName} {lastName}</h4>
                  <small className={`follow-username-2 ${isDarkMode && "color-white"}`}>@{userHandler}</small>
                </div>
              </div>

              <button onClick={() => handleFollowUser(_id, socialToken, dataDispatch)} className={`follow-btn letter-spacing-1 cursor-pointer ${isDarkMode && "dark-hover-effect"}`}>Follow</button>

            </div>
          )
        })}

        {notFollowedUsers?.length === 0 && <p className={`letter-spacing-1 no-suggestions-text ${isDarkMode && "color-white"}`}>No Follow Suggestions</p>}
      </div>
    </div>
  )
}
