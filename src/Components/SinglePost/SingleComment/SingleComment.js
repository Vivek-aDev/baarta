import React from 'react'
import './SingleComment.css'
import { UseData } from '../../../Contexts/DataContext';
import { AiFillDelete } from 'react-icons/ai';
import { deleteCommentHandler } from '../../../Services/PostServices';
import { useNavigate } from 'react-router';

export const SingleComment = ({ comment, postId }) => {
  const { _id, username, text } = comment;
  const navigate = useNavigate()

  const { dataState: { users, posts }, dataDispatch, isDarkMode, setIsLoading } = UseData();

  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const socialToken = localStorage.getItem("socialToken")

  const handleUserProfile = (userHandler) => {
    navigate(`/user-profile/${userHandler}`)
    window.scrollTo(0, 0)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }

  const handleDeleteComment = () => {
    deleteCommentHandler(postId, _id, socialToken, dataDispatch)
  }

  const { firstName, lastName, profile_photo, userHandler } = users?.find(el => el?.username === username) || {};
  return (
    <div className='comment-card flex'>
      <span onClick={() => handleUserProfile(userHandler)} className='cursor-pointer'><img src={profile_photo} alt='user-profile' className='user-comment-profile' /></span>
      <div className={`user-comment letter-spacing-1 flex justify-between ${isDarkMode && "bg-dark"}`}>
        <div className='comment-info'>
          <p onClick={() => handleUserProfile(userHandler)} className={`cursor-pointer comment-user-name ${isDarkMode && "color-white"}`}>{firstName} {lastName}</p>

          <p className={`comment-desc ${isDarkMode && "color-white"}`}>{text}</p>
        </div>
        {
          socialUser?.username === username && <div className='comment-operations flex'>
            <span onClick={handleDeleteComment} className='delete-comment-icon cursor-pointer'><AiFillDelete /></span>
          </div>
        }
      </div>
    </div>
  )
}
