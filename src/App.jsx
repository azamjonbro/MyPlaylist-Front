import React from 'react'
import {Routes, Route} from "react-router-dom"
import AllPlaylist from './Pages/AllPlaylist'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<AllPlaylist/>}/>
    </Routes>
    </>
  )
}

export default App
