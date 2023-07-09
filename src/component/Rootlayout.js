import React from 'react'
import { Outlet } from 'react-router-dom'
import NavScrollExample from './NavScrollExample'

const Rootlayout = () => {
  return (
    <>
      <NavScrollExample />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Rootlayout
