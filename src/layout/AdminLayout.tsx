import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { RootState } from '../redux/store'
import Sidebar from './sections/Sidebar';

export default function AdminLayout() {

  const token = useSelector((state: RootState) => state.user.token);

  if(!token) {
    return (
      <>
            <div className="grid grid-cols-[256px_minmax(256px,_1fr)] min-h-screen">
              <div className="border border-red-600 h-full">
                <Sidebar />
              </div>
              <div className="border border-red-600 h-full p-6">
                <Outlet /> {/* Child Pages Display here */}
              </div>
            </div>
      </>
    )
  } else {
    return <Navigate to={'/login'} replace={true} />
  }

}



/*
  ADMIN_LAYOUT Provides
  - Sidebar
  - Header
  - Body Section
*/