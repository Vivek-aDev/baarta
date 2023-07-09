import React, { useEffect } from 'react'
import { v4 as uuid } from "uuid";
import { BiArrowBack, BiImageAdd } from 'react-icons/bi'
import { IoMdRemoveCircle } from 'react-icons/io'
import './AddPost.css'
import { createPostHandler, editPostHandler } from '../../Services/PostServices';
import { useState } from 'react';
import { UseData } from '../../Contexts/DataContext';
import { warning } from '../../Services/ToastsServices';

export const AddPost = () => {
  const [postData, setPostData] = useState()

  const { dataDispatch, isDarkMode, dataState: { posts, postIdToBeEdit } } = UseData();


  useEffect(() => {
    const editPostData = posts?.find(post => post._id === postIdToBeEdit);
    setPostData(postIdToBeEdit ? editPostData : {
      _id: uuid(),
      content: "",
      comments: [],
      postImg: ""
    })
  }, [])

  const socialToken = localStorage.getItem("socialToken");

  const handleImageUpload = (e) => {
    const selectedImg = e.target.files[0];
    setPostData((prev) => ({ ...prev, postImg: URL.createObjectURL(selectedImg) }))
  }

  const handlePostClick = () => {
    if (postIdToBeEdit) {
      editPostHandler(postIdToBeEdit, postData, socialToken, dataDispatch)
      dataDispatch({ type: "CLEAR_ID_TO_EDIT" })
      dataDispatch({ type: "HIDE_POST_MODAL" })
    }

    else {
      if (postData.content) {
        createPostHandler(postData, socialToken, dataDispatch)
        dataDispatch({ type: "CLEAR_ID_TO_EDIT" })
        dataDispatch({ type: "HIDE_POST_MODAL" })
      }
      else {
        warning("Add Content!")
      }
    }
  }

  const handleRemoveFile = () => {
    setPostData(prev => ({ ...prev, postImg: "" }))
  }

  const handleGoBack = () => {
    dataDispatch({ type: "HIDE_POST_MODAL" })
    dataDispatch({ type: "CLEAR_ID_TO_EDIT" })
  }

  return (
    <div className="create-post-main">
      <div className={`create-post-container ${isDarkMode && "bg-dark"}`}>
        <div className='create-post-inner-container'>
          <span className={`go-back cursor-pointer ${isDarkMode && "color-white"}`} onClick={handleGoBack}><BiArrowBack /></span>

          <textarea name="" id="" className={`post-textarea letter-spacing-1 ${isDarkMode && "bg-dark-light color-white"}`} onChange={(e) => setPostData(prev => ({ ...prev, content: e.target.value }))} value={postData?.content} placeholder='What is happening?' autoFocus>
          </textarea>


          <div className='flex justify-between align-center'>

            <div className="input-file-container ">
              <label htmlFor="file-upload" className="btn-upload cursor-pointer flex align-center letter-spacing-1">
                <span className={`add-photo-icon ${isDarkMode && "color-white"}`}>  <BiImageAdd /> </span>
                <span className={`add-photo-text ${isDarkMode && "color-white"}`}>Photo/GIF</span>
              </label>
              <input id="file-upload" type="file" onChange={handleImageUpload} />

              {
                postData?.postImg && <div className='selected-img-box'>
                  <img src={postData.postImg} alt="" className='selected-img' />
                  <span onClick={handleRemoveFile} className='clear-selected-img cursor-pointer'><IoMdRemoveCircle /></span>
                </div>
              }

            </div>


            <button className={`new-post-button cursor-pointer ${isDarkMode && "dark-hover-effect"}`} onClick={handlePostClick}>Post</button>
          </div>


        </div>
      </div>
    </div>
  )
}

