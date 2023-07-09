import React from 'react'
import './FollowDetails.css'
import { UseData } from '../../Contexts/DataContext';
import { BiArrowBack } from 'react-icons/bi';
import { followUserHandler, unfollowUserHandler } from '../../Services/UserServices';
import { useNavigate } from 'react-router';

export const FollowDetails = () => {
  const { isDarkMode, dataState: { users, modals: { showFollowDetailId, showDetailType } }, dataDispatch } = UseData();
  const navigate = useNavigate();
  const closeFollowDetail = () => {
    dataDispatch({ type: "HIDE_FOLLOW_DETAIL_MODAL" })
  }

  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find((el) => el?.username === socialUser?.username);

  const foundUser = users?.find(({ id }) => id === showFollowDetailId);

  const socialToken = localStorage.getItem("socialToken")

  const handleFollow = (id) => {
    followUserHandler(id, socialToken, dataDispatch)

  }
  const handleUnFollow = (id) => {
    unfollowUserHandler(id, socialToken, dataDispatch)
  }

  const viewProfile = (userHandler) => {
    if (userHandler === loggedInUser?.userHandler) {
      navigate(`/profile`)
    }
    else {
      navigate(`/user-profile/${userHandler}`)
    }
    dataDispatch({ type: "HIDE_FOLLOW_DETAIL_MODAL" })
  }

  return (
    <>
      {foundUser[showDetailType]?.length > 0 && <div className='follow-details-container flex justify-center align-center'>
        <div className={`follow-details-inner ${isDarkMode && "bg-dark color-white"}`}>
          <span onClick={closeFollowDetail} className={`go-back cursor-pointer ${isDarkMode && "color-white"}`} ><BiArrowBack /></span>

          {
            (showDetailType === "followers" ? foundUser?.followers : foundUser?.following).map((el) => {
              return (
                <div className='flex align-center justify-between follow-detail-card'>
                  <div onClick={() => viewProfile(el?.userHandler)} className='flex align-center cursor-pointer' style={{ gap: "20px" }}>
                    <img src={el?.profile_photo} alt="" className='follow-detail-img' />
                    <p>{el?.firstName} {el?.lastName}</p>
                  </div>


                  {
                    loggedInUser?.username !== el?.username && <>
                      {
                        loggedInUser?.following?.some(item => item?.id === el?.id) ? <button onClick={() => handleUnFollow(el?._id)} className={`follow-btn letter-spacing-1 cursor-pointer ${isDarkMode && "dark-hover-effect"}`}>Unfollow</button>
                          :
                          <button onClick={() => handleFollow(el?._id)} className={`follow-btn letter-spacing-1 cursor-pointer ${isDarkMode && "dark-hover-effect"}`}>Follow</button>

                      }
                    </>
                  }


                </div>
              )
            })
          }
        </div>
      </div>}
    </>
  )
}

// className={`follow-btn letter-spacing-1 cursor-pointer ${isDarkMode && "dark-hover-effect"}`}