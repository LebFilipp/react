import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom'
import Profile from './Component/Profile'
import Chats from './Component/Chats'
import Error from './Component/Error'
import Home from './Component/Home'
import Counter from './Component/Counter'
import Layout from './Layout'
// import { ThemeContext, themes } from './Component/Context'


const App = () => {
  // const [currentTheme, setCurrentTheme] = useState(themes.light)
  // const toggleTheme = () => {
  //   setCurrentTheme( prevState => prevState === themes.light ? themes.dark : themes.light)
  // }
  return (
    // <ThemeContext.Provider value={{theme: currentTheme, toggleTheme: toggleTheme}}>
     <Routes>
      <Route to={'/'} element={<Layout />}>
        <Route path={'/'} element={<Home />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/chats'} element={<Chats />} />
        <Route path={'/counter'} element={<Counter />} />
        <Route path={'*'} element={<Error />} />
      </Route>
     </Routes>
    // </ThemeContext.Provider>
  )
}

export default App
