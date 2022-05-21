import React, {useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { ThemeContext, themes } from './Component/Context'


const Counter = () => {
    const value = useSelector(state => state.count)
    const dispatch = useDispatch()
  
    // const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    
      <>
        <div>
            <button onClick={() => dispatch({ type: 'minus'})}>-</button>
            {value}
            <button onClick={() => dispatch({ type: 'plus'})}>+</button>
        </div>
      </>
  )
}

export default Counter
