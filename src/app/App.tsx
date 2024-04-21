import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import {classNames} from "shared/lib/classNames/className";
import {AppRouter} from "app/providers/router";



export const App = () => {
 const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter />
    </div>
  )
}
