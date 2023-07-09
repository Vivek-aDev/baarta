import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),

    content:
      "God and belief: a profound connection, igniting the spirit, guiding with unwavering trust.",
    likes: {
      likeCount: 1,
      likedBy: [{
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
        link: "https://vivekadev-portfolio.netlify.app/",
        bio: "Tech geek | Gaming enthusiast | Future coder"
      },],
      dislikedBy: [],
    },
    username: "vivekadev@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "himanshusahu@gmail.com",
        text: "Correct✔",
      },
      {
        _id: uuid(),
        username: "rajeshpradha@gmail.com",
        text: "Agree👍🏻",
      }
    ],
    createdAt: new Date(2020, 5, 25, 11, 27),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "The allure of nature never fades, transcending the whims of trends.",
    likes: {
      likeCount: 2,
      likedBy: [{
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
        link: "https://vivekadev-portfolio.netlify.app/",
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
        link: "https://vivekadev-portfolio.netlify.app/",
        bio: "MobileGamer | Spiritual | Lover of tech"
      },],
      dislikedBy: [],
    },
    username: "rishabhjain@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "rajeshpradha@gmail.com",
        text: "Nice👌🏻",
      }
    ],
    createdAt: new Date(2020, 5, 25, 18, 4),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "where beauty meets power, grace embraces strength, and love weaves through every thread of creation.",
    likes: {
      likeCount: 1,
      likedBy: [
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
          link: "https://vivekadev-portfolio.netlify.app/",
          bio: "Coder | Star seeker | Science nerd"
        }
      ],
      dislikedBy: []
    },
    username: "vivekadev@gmail.com",
    postImg: "https://images.pexels.com/photos/2730217/pexels-photo-2730217.jpeg?auto=compress&cs=tinysrgb&w=600",
    comments: [
      {
        _id: uuid(),
        username: "rajeshpradha@gmail.com",
        text: "Awesome🤩"
      },
      {
        _id: uuid(),
        username: "sachinbaral@gmail.com",
        text: "😍😍"
      }
    ],
    createdAt: new Date(2023, 5, 23, 6, 49),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "The wellspring of genuine wisdom lies in the embrace of nature.",
    likes: {
      likeCount: 1,
      likedBy: [{
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
        link: "https://vivekadev-portfolio.netlify.app/",
        bio: "Navodayan | Sports | Free spirit"
      }],
      dislikedBy: []
    },
    username: "rishabhjain@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "kalyankumar@gmail.com",
        text: "Great post!"
      },
      {
        _id: uuid(),
        username: "shriyapanda@gmail.com",
        text: "I love it!"
      }
    ],
    createdAt: new Date(2023, 5, 18, 15, 1),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "In the realm of creation, courage breathes life into imagination's canvas.",
    likes: {
      likeCount: 1,
      likedBy: [{
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
      }],
      dislikedBy: []
    },
    username: "rajeshpradha@gmail.com",
    postImg: "https://images.pexels.com/photos/2778746/pexels-photo-2778746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    comments: [
      {
        _id: uuid(),
        username: "himanshusahu@gmail.com",
        text: "Amazing!"
      }
    ],
    createdAt: new Date(2023, 1, 11, 9, 12),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "From dusk's embrace, my soul emerges, radiant with love for the stars, unafraid of the night.",
    likes: {
      likeCount: 1,
      likedBy: [{
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
        link: "https://vivekadev-portfolio.netlify.app/",
        bio: "Gamer | Rider | Photographer"
      },],
      dislikedBy: []
    },
    username: "sachinbaral@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "abhijha@gmail.com",
        text: "Impressive!"
      },
      {
        _id: uuid(),
        username: "kalyankumar@gmail.com",
        text: "Bravo!"
      }
    ],
    createdAt: new Date(2022, 12, 31, 7, 19),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "If I have perceived the distant horizons with greater clarity, it is because I have embraced the wisdom bestowed upon me by the giants who came before.",
    likes: {
      likeCount: 2,
      likedBy: [{
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
        link: "https://vivekadev-portfolio.netlify.app/",
        bio: "MobileGamer | Spiritual | Lover of tech"
      }, {
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
      }],
      dislikedBy: []
    },
    username: "abhijha@gmail.com",
    comments: [],
    createdAt: new Date(2022, 6, 11, 5, 28),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "In the realm of gaming, connections are forged and communities thrive.",
    likes: {
      likeCount: 1,
      likedBy: [{
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
        link: "https://vivekadev-portfolio.netlify.app/",
        bio: "MobileGamer | Spiritual | Lover of tech"
      },],
      dislikedBy: []
    },
    username: "shriyapanda@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "himanshusahu@gmail.com",
        text: "May be"
      }
    ],
    createdAt: new Date(2022, 5, 11, 3, 11),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "To embark on the journey, silence the words and embrace action's call.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    username: "kalyankumar@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "rajeshpradha@gmail.com",
        text: "Absolutely!"
      },
      {
        _id: uuid(),
        username: "abhijha@gmail.com",
        text: "💯"
      }
    ],
    createdAt: new Date(2022, 3, 25, 25, 20),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "A skilled wordsmith embraces not just their own essence, but also the spirits of their comrades.",
    likes: {
      likeCount: 1,
      likedBy: [{
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
      }],
      dislikedBy: []
    },
    username: "himanshusahu@gmail.com",
    comments: [

      {
        _id: uuid(),
        username: "rishabhjain@gmail.com",
        text: "💯"
      }
    ],
    createdAt: new Date(2022, 2, 1, 11, 10),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Science unveils the wonders of the universe, while God embodies the essence of all knowledge. In their convergence, we find awe and reverence for the boundless mysteries that surround us.",
    likes: {
      likeCount: 2,
      likedBy: [

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
          link: "https://vivekadev-portfolio.netlify.app/",
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
          link: "https://vivekadev-portfolio.netlify.app/",
          bio: "Gamer | Rider | Photographer"
        },
      ],
      dislikedBy: []
    },
    username: "vivekadev@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "rishabhjain@gmail.com",
        text: "haha😃😃"
      },
    ],
    createdAt: new Date(2021, 8, 11, 17, 30),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "A single embrace of nature unites the entire world in kinship.",
    likes: {
      likeCount: 1,
      likedBy: [{
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
        link: "https://vivekadev-portfolio.netlify.app/",
        bio: "Navodayan | Sports | Free spirit"
      }],
      dislikedBy: []
    },
    username: "rishabhjain@gmail.com",
    postImg: "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    comments: [
      {
        _id: uuid(),
        username: "vivekadev@gmail.com",
        text: "Amazing post!"
      },
      {
        _id: uuid(),
        username: "rajeshpradha@gmail.com",
        text: "Nice😍"
      }
    ],
    createdAt: new Date(2021, 6, 21, 11, 13),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "If words could capture it all, the canvas would hold no purpose.",
    likes: {
      likeCount: 1,
      likedBy: [{
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
        link: "https://vivekadev-portfolio.netlify.app/",
        bio: "Navodayan | Sports | Free spirit"
      }],
      dislikedBy: []
    },
    username: "rajeshpradha@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "rishabhjain@gmail.com",
        text: "Agree✔"
      },
      {
        _id: uuid(),
        username: "kalyankumar@gmail.com",
        text: "True💯"
      }
    ],
    createdAt: new Date(2021, 3, 19, 19, 10),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "The realm of gaming transcends gender, welcoming all who dare to immerse themselves in its captivating world.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    postImg: "https://images.pexels.com/photos/700971/pexels-photo-700971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "shriyapanda@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "rajeshpradha@gmail.com",
        text: "Impressive!"
      },
      {
        _id: uuid(),
        username: "rishabhjain@gmail.com",
        text: "Bravo!"
      }
    ],
    createdAt: new Date(2021, 1, 31, 22, 24),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Solidity crumbles before the vastness of the cosmos, unveiling the illusory nature of space and matter.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    postImg: "https://images.pexels.com/photos/5967953/pexels-photo-5967953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "sachinbaral@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "shriyapanda@gmail.com",
        text: "Well done!"
      },
      {
        _id: uuid(),
        username: "vivekadev@gmail.com",
        text: "I'm impressed!"
      }
    ],
    createdAt: new Date(2020, 12, 31, 17, 25),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "In the realm of writing, refrain from judgment and strive for comprehension.",
    likes: {
      likeCount: 1,
      likedBy: [{
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Jha",
        username: "abhijha@gmail.com",
        profile_photo: "https://i.ibb.co/VDq5tLr/005-man-2.png",
        userHandler: "AbhiJha",
        password: "pass123",
        createdAt: new Date(2020, 11, 30, 1, 1),
        updatedAt: formatDate(),
        bookmarks: [],
        followers: [],
        following: [],
        link: "https://vivekadev-portfolio.netlify.app/",
        bio: "Trader | Business | Tech enthusiast"
      }],
      dislikedBy: []
    },
    postImg: "https://images.pexels.com/photos/6037379/pexels-photo-6037379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "himanshusahu@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "sachinbaral@gmail.com",
        text: "True!"
      },
      {
        _id: uuid(),
        username: "shriyapanda@gmail.com",
        text: "Love it!"
      }
    ],
    createdAt: new Date(2020, 8, 10, 24, 20),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Existence unfolds as a bold odyssey or not at all.",
    likes: {
      likeCount: 2,
      likedBy: [{
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
        link: "https://vivekadev-portfolio.netlify.app/",
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
        link: "https://vivekadev-portfolio.netlify.app/",
        bio: "MobileGamer | Spiritual | Lover of tech"
      },],
      dislikedBy: []
    },
    postImg: "https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "kalyankumar@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "himanshusahu@gmail.com",
        text: "Absolutely!"
      },
      {
        _id: uuid(),
        username: "sachinbaral@gmail.com",
        text: "True💯!"
      }
    ],
    createdAt: new Date(2020, 6, 10, 15, 25),
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "Like a compass for the soul, knowledge illuminates desire's path, leading us to new horizons of understanding.",
    likes: {
      likeCount: 1,
      likedBy: [{
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
        link: "https://vivekadev-portfolio.netlify.app/",
        bio: "Trader | Business | Tech enthusiast"
      }],
      dislikedBy: []
    },
    postImg: "https://images.pexels.com/photos/3755707/pexels-photo-3755707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    username: "abhijha@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "kalyankumar@gmail.com",
        text: "Nice"
      },
      {
        _id: uuid(),
        username: "himanshusahu@gmail.com",
        text: "Agree💯"
      }
    ],
    createdAt: new Date(2020, 5, 25, 16, 30),
    updatedAt: formatDate()
  }

];
