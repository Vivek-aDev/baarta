import React from 'react'
import './Home.css'
import { Search } from '../../Components/Search/Search'
import { FollowBar } from '../../Components/FollowBar/FollowBar'
import { ContentBox } from '../../Components/ContentBox/ContentBox'
import { Navbar } from '../../Components/Navbar/Navbar'
import { UseData } from '../../Contexts/DataContext'


export const Home = ({ children }) => {
  const { isDarkMode } = UseData();
  return (
    <div className={`app-container ${isDarkMode && "bg-dark"}`}>
      <Navbar />
      <div className='hide-on-lg'>
        <Search />
      </div>

      <ContentBox>
        {children}
      </ContentBox>
      <div className={`hide-on-md ${isDarkMode && "bg-dark"}`}>

        <FollowBar />
      </div>
    </div>
  )
}
