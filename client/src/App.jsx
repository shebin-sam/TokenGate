import Wallet from './pages/wallet';
import Home from './pages/Home';
import Members from './pages/Members';
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {path:'/',element:<Wallet></Wallet>},
    {path:'/home',element:<Home></Home>},
    {path:'/members',element:<Members></Members>}
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
