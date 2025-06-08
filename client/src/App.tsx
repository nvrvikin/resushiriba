//import { TransitionGroup, CSSTransition } from "react-transition-group"
import { createBrowserRouter, createRoutesFromElements, Route,  RouterProvider } from 'react-router-dom'

//import store from './store'

import Index from './pages/index'
import MenuRouter from './pages/menuRouter'
import Order from './pages/order'
import News from './pages/news'
import Contacts from './pages/contacts'
//import Admin from './pages/admin/adminRouter'
import NoMatch from './pages/noMatch'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import style from '../sass/main.scss'

/*
function handListener(firstHandRef, secondHandRef){

}
*/

const appRouter = createBrowserRouter(createRoutesFromElements([
      <Route path="/" element={<Index />} />,
      <Route path="menu/*" element={<MenuRouter />} />,
      <Route path="order/*" element={<Order />} />,
      <Route path="news/*" element={<News />} />,
      <Route path="contacts/*" element={<Contacts />} />,
      <Route path="/*" element={<NoMatch />} />
]))

function App() {

  return (
      <RouterProvider router={appRouter} />
  )
}

export default App