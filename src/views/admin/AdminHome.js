import React from 'react'
import Header from '../../components/partials/admin/Header'
import Notification from '../../components/partials/admin/Notification'
import Sidebar from '../../components/partials/admin/Sidebar'
import Dashboard from './Dashboard'

const AdminHome = () => {
  return (
    <div className="wrapper vertical  light">
      <Header />
      <Sidebar />
      {/* main page */}
      <main role="main" className="main-content">
        <Dashboard />
        <Notification />
      </main>
    </div>
  )
}

export default AdminHome