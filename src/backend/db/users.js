import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Vivek",
    lastName: "aDev",
    username: "vivekadev@gmail.com",
    profile_photo: "https://i.ibb.co/NnN6sdP/001-hacker.png",
    userHandler: "vivekaDev",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://iasvivekportfolio.netlify.app/",
    bio: "Frontend-Developer | Photographer | UX/UI enthusiast"
  },
  {
    _id: uuid(),
    firstName: "Rishabh",
    lastName: "Jain",
    username: "rishabhjain@gmail.com",
    profile_photo: "https://i.ibb.co/KrGnFYr/010-boy.png",
    userHandler: "RishabhJain",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://rishabhjain.netlify.app/",
    bio: "Developer | gamer | Traveller"
  },
  {
    _id: uuid(),
    firstName: "Rajesh",
    lastName: "Pradha",
    username: "rajeshpradha@gmail.com",
    profile_photo: "https://i.ibb.co/FJTFM7x/007-young-man.png",
    userHandler: "RajeshPradha",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://rajeshpradha.netlify.app/",
    bio: "Gamer | Rider | Photographer"
  },
  {
    _id: uuid(),
    firstName: "Shriya",
    lastName: "Panda",
    username: "shriyapanda@gmail.com",
    profile_photo: "https://i.ibb.co/4t1qLZK/008-beard.png",
    userHandler: "ShriyaPanda",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://shriyapanda.netlify.app/",
    bio: "Tech geek | Gaming enthusiast | Future coder"
  },
  {
    _id: uuid(),
    firstName: "Sachin",
    lastName: "Baral",
    username: "sachinbaral@gmail.com",
    profile_photo: "https://i.ibb.co/932p0dT/009-bussiness-man-1.png",
    userHandler: "SachinBaral",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://sachinbaral.netlify.app/",
    bio: "Coder | Star seeker | Science nerd"
  },
  {
    _id: uuid(),
    firstName: "Himanshu",
    lastName: "Sahu",
    username: "himanshusahu@gmail.com",
    profile_photo: "https://i.ibb.co/xDXDyHf/002-man.png",
    userHandler: "HimanshuSahu",
    password: "100",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://himanshusahu.netlify.app/",
    bio: "MobileGamer | Spiritual | Lover of tech"
  },
  {
    _id: uuid(),
    firstName: "Kalyan",
    lastName: "Kumar",
    username: "kalyankumar@gmail.com",
    profile_photo: "https://i.ibb.co/G98BtwN/003-employee.png",
    userHandler: "KalyanKumar",
    password: "abc123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://kalyankumar.netlify.app/",
    bio: "Navodayan | Sports | Free spirit"
  }
  ,
  {
    _id: uuid(),
    firstName: "Abhi",
    lastName: "Jha",
    username: "abhijha@gmail.com",
    profile_photo: "https://i.ibb.co/VDq5tLr/005-man-2.png",
    userHandler: "AbhiJha",
    password: "pass123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bookmarks: [],
    followers: [],
    following: [],
    link: "https://abhijha.netlify.app/",
    bio: "Trader | Business | Tech enthusiast"
  }

];
