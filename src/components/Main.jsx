import React from 'react'
import { View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import { AppBar } from './AppBar'
import RepositoryList from './RepositoryList'
import Gallery from './Gallery'
import Contact from './Contact'

const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <Routes>
        <Route exact path='/' element={<RepositoryList />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </View>
  )
}

export default Main
