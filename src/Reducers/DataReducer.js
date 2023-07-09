export const dataInitialState = {
  posts: [],
  users: [],
  postIdToBeEdit: null,
  modals: {
    showPostModal: false,
    showCommentModal: false,
    commentPostId: null,
    showProfileEditModal: false,
    showFollowDetailModel: false,
    showFollowDetailId: null,
    showDetailType: null
  }
}

export const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INITIALIZE_POSTS": return {
      ...state, posts: payload
    }

    case "INITIALIZE_USERS": return {
      ...state, users: payload
    }

    case "BOOKMARK_OPERATIONS": return {

      ...state, users: state.users.map(el => el.username === payload.username ? { ...el, bookmarks: payload.bookmarks } : el)
    }

    case "POST_OPERATIONS": return {
      ...state, posts: payload
    }

    case "USER_OPERATIONS": return {
      ...state, users: state.users.map(user => payload.username === user.username ? payload : user)
    }

    // It will add or remove the user from loggedInUser following.

    case "FOLLOWING_OPERATIONS": return {
      ...state, users: state?.users?.map(el => el.username === payload.user?.username ? { ...el, following: payload?.user?.following } : el)
    }

    // It will add follower in user account to whom I'm following
    case "ADD_FOLLOWER": return {
      ...state, users: state.users.map(user => user.username === payload.followUser.username ? { ...user, followers: payload.followUser.followers } : user)
    }

    case "ADD_NEW_USER": return {
      ...state, users: [...state.users, payload]
    }

    case "REMOVE_FOLLOWER": return {
      ...state, users: state.users.map(el => el.username === payload.unfollowedUser.username ? {
        ...el, followers: payload.unfollowedUser.followers
      } : el)
    }

    case "POST_ID_TO_EDIT": return {
      ...state, postIdToBeEdit: payload
    }

    case "CLEAR_ID_TO_EDIT": return {
      ...state, postIdToBeEdit: null
    }

    // For All Modals

    case "SHOW_POST_MODAL": return {
      ...state, modals: { ...state.modals, showPostModal: true }
    }

    case "HIDE_POST_MODAL": return {
      ...state, modals: { ...state.modsls, showPostModal: false }
    }

    case "SHOW_COMMENT_MODAL": return {
      ...state, modals: {
        ...state.modals, showCommentModal: true,
        commentPostId: action?.payload?.commentPostId
      }
    }

    case "HIDE_COMMENT_MODAL": return {
      ...state, modals: {
        ...state.modals, showCommentModal: false,
        commentPostId: null
      }
    }

    case "SHOW_PROFILE_EDIT_MODAL": return {
      ...state, modals: { ...state.modals, showProfileEditModal: true }
    }

    case "HIDE_PROFILE_EDIT_MODAL": return {
      ...state, modals: { ...state.modals, showProfileEditModal: false }
    }

    case "SHOW_FOLLOW_DETAIL_MODAL": return {
      ...state, modals: {
        ...state.modals, showFollowDetailModel: true,
        showFollowDetailId: action?.payload?.id, showDetailType: action?.payload?.type
      }
    }

    case "HIDE_FOLLOW_DETAIL_MODAL": return {
      ...state, modals: { ...state.modals, showFollowDetailModel: false }
    }


    case "RESET_FOLLOW_DETAIL_ID": return {
      ...state, modals: { ...state.modals, showFollowDetailId: null }
    }
    default: return state;
  }
}