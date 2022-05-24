import React, { useState} from 'react'
import CustomLink from './CustomLink'
// import { ThemeContext, themes } from './Component/Context'

const Home = () => {
  // const [currentTheme, setCurrentTheme] = useState(themes.light)
  // const toggleTheme = () => {
  //   setCurrentTheme( prevState => prevState === themes.light ? themes.dark : themes.light)
  // }

  return (

     <header>
       {/* <ThemeContext.Provider value={{theme: currentTheme, toggleTheme: toggleTheme}}> */}
      <CustomLink to={'/profile'}>PROFILE</CustomLink>
      <CustomLink to={'/chats'}>CHATS</CustomLink>
      <CustomLink to={'/counter'}>COUNTER</CustomLink>
      {/* </ThemeContext.Provider> */}
     </header>
  )
}

export default Home 
