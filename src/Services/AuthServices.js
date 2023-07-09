import axios from "axios"
import { success, warning } from "./ToastsServices";


export const LoginUser = async (creds, setIsLoggedIn, prevLocation, navigate) => {
  try {
    const { status, data: { encodedToken, foundUser } } = await axios.post('/api/auth/login', {
      ...creds
    });
    if (status === 200 || status === 201) {
      localStorage.setItem("socialToken", encodedToken);
      localStorage.setItem("socialUser", JSON.stringify(foundUser))
      setIsLoggedIn(true)
      if (prevLocation) {
        navigate(prevLocation)
      }
      else {
        navigate("/")
      }
      success("Login Successfully")
    }

  } catch (error) {
    console.log(error)
    warning("No details found")
  }
}

export const SignupUser = async (creds, setIsLoggedIn, navigate, dataDispatch) => {
  try {
    const { status, data: { encodedToken, createdUser } } = await axios.post('/api/auth/signup', {
      ...creds
    })

    if (status === 200 || status === 201) {
      localStorage.setItem("socialToken", encodedToken);
      localStorage.setItem("socialUser", JSON.stringify(createdUser));
      setIsLoggedIn(true);
      navigate("/")

      dataDispatch({ type: "ADD_NEW_USER", payload: createdUser })
      success("SignUp Succesfully")
    }
  } catch (error) {
    console.log(error)
    warning("Email already exists")
  }
}