import React from 'react'
import { UseAuth } from '../Contexts/AuthContext'
import { Navigate, useLocation } from 'react-router';

export const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = UseAuth();
  const location = useLocation();
  return (
    <>
      {
        isLoggedIn ? <>{children}</> : <Navigate to="/login" state={{ from: location }} />
      }
    </>
  )
}
