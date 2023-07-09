import React from 'react'
import './ContentBox.css'
import { Search } from '../Search/Search'
import { AddPost } from '../../Modals/AddPost/AddPost'
import { AddComment } from '../../Modals/AddComment/AddComment'
import { UseData } from '../../Contexts/DataContext'
import { useNavigate } from 'react-router'
import { EditProfile } from '../../Modals/EditProfile/EditProfile'
import { FollowDetails } from '../../Modals/FollowDetails/FollowDetails'


export const ContentBox = ({ children }) => {

  const socialUser = JSON.parse(localStorage.getItem("socialUser"))

  const { searchedUserValue, setSearchedUserValue, dataState: { users, modals: { showPostModal, showCommentModal, showProfileEditModal, showFollowDetailModel } }, isDarkMode } = UseData();

  const navigate = useNavigate();

  const usersBySearch = searchedUserValue && users?.filter(el => el.username !== socialUser.username && (el.firstName + el.lastName).toLowerCase().includes(searchedUserValue.toLowerCase()));

  const handleSearchUserClick = (userHandler) => {
    navigate(`/user-profile/${userHandler}`)
    setSearchedUserValue("")
  }

  return (
    <>
      {showPostModal && <AddPost />}
      {showCommentModal && <AddComment />}
      {showProfileEditModal && <EditProfile />}
      {showFollowDetailModel && <FollowDetails />}

      <div className={`content-box-container ${isDarkMode && "bg-dark"}`}>

        <div style={{ zIndex: "1" }} className={`hide-on-md ${isDarkMode && "bg-dark"}`}>
          <Search />
        </div>
        {searchedUserValue && <div className={`searched-users ${isDarkMode && "bg-dark-light color-white"}`}>
          <ul>
            {
              usersBySearch?.map(el => {
                const { firstName, lastName, profile_photo, userHandler } = el;
                return (
                  <li className='searched-user flex align-center cursor-pointer' onClick={() => handleSearchUserClick(userHandler)}>
                    <img src={profile_photo} alt="profile" className='searched-user-profile' />
                    <span className='search-user-name letter-spacing-1'>{firstName} {lastName}</span>
                  </li>
                )
              })
            }
          </ul>
          {usersBySearch.length === 0 && <h3 className={`user-not-found letter-spacing-1 text-center ${isDarkMode && "color-white"}`}>
            User Not Found
          </h3>}
        </div>

        }

        {children}

      </div>
    </>
  )
}
