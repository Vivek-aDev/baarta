import axios from "axios"
import { success } from "./ToastsServices";

export const followUserHandler = async (followUserId, socialToken, dataDispatch) => {
  try {
    const { status, data } = await axios.post(`/api/users/follow/${followUserId}`,
      {},
      {
        headers: {
          authorization: socialToken
        }
      }
    )

    if (status === 200 || status === 201) {
      dataDispatch({ type: "FOLLOWING_OPERATIONS", payload: { user: data.user } });
      dataDispatch({ type: "ADD_FOLLOWER", payload: { followUser: data.followUser } });

    }
  } catch (error) {
    console.log(error)
  }
}


export const unfollowUserHandler = async (followUserId, socialToken, dataDispatch) => {
  try {
    const { status, data } = await axios.post(`/api/users/unfollow/${followUserId}`,
      {},
      {
        headers: {
          authorization: socialToken
        }
      }
    )

    if (status === 200 || status === 201) {
      dataDispatch({
        type: "FOLLOWING_OPERATIONS", payload: {
          user: data.user
        }
      })
      dataDispatch({
        type: "REMOVE_FOLLOWER", payload: {
          unfollowedUser: data.followUser
        }
      })

    }
  } catch (error) {
    console.log(error)
  }
}

export const editUserHandler = async (userData, socialToken, dataDispatch) => {
  try {
    const { status, data: { user } } = await axios.post(`/api/users/edit`, {
      userData
    },
      {
        headers: {
          authorization: socialToken
        }
      })

    if (status === 200 || status === 201) {
      dataDispatch({ type: "USER_OPERATIONS", payload: user })
      success("User Info updated!")
    }

  } catch (error) {
    console.log(error)
  }
}