import React from 'react'
import {Routes, Route} from "react-router-dom"
import AllPlaylist from './Pages/AllPlaylist'
import OneAudio from "./Pages/OneAudio.jsx"
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<AllPlaylist/>}/>
      <Route path='/music/:id' element={<OneAudio/>}/>

    </Routes>
    </>
  )
}

export default App
