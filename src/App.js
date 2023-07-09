import { Route, Routes } from 'react-router';
import { ToastContainer } from "react-toastify";
import Mockman from 'mockman-js'

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './Features/Home/Home';
import { Profile } from './Features/Profile/Profile';
import { HomeContent } from './Features/HomeContent/HomeContent';
import { Explore } from './Features/Explore/Explore';
import { Bookmark } from './Features/Bookmark/Bookmark';
import { Login } from './Features/Login/Login';
import { SignUp } from './Features/SignUp/SignUp';
import { RequiresAuth } from './Auth/RequiresAuth';
import { PostDetail } from './Features/PostDetail/PostDetail';
import { UsersProfile } from './Features/Profile/UsersProfile';
import { UseData } from './Contexts/DataContext';
import { Loader } from './Components/Loader/Loader';

function App() {
  const { isLoading } = UseData();
  return (
    <div className="App">
      {isLoading && <Loader />}
      <Routes>
        <Route path='/' element={<RequiresAuth><Home><HomeContent /></Home></RequiresAuth>} />
        <Route path='/explore' element={<RequiresAuth><Home><Explore /></Home></RequiresAuth>} />
        <Route path='/bookmark' element={<RequiresAuth><Home><Bookmark /></Home></RequiresAuth>} />
        <Route path='/profile' element={<RequiresAuth><Home><Profile /></Home></RequiresAuth>} />
        <Route path='/user-profile/:userhandler' element={<RequiresAuth><Home><UsersProfile /></Home></RequiresAuth>} />
        <Route path='/post/:postId' element={<Home><PostDetail /></Home>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/mockman' element={<Mockman />} />
      </Routes>
      <ToastContainer position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
