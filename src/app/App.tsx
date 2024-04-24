import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import {classNames} from "shared/lib/classNames/className";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets";



export const App = () => {
 const {theme} = useTheme();
  return (
      <div className={classNames('app', {}, [theme])}>
          <Navbar/>
          <AppRouter/>
      </div>
  )
}
