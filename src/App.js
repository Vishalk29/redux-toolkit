// import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Product from './component/Product'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import DashBoard from './component/DashBoard'
import Cart from './component/Cart'
import Rootlayout from './component/Rootlayout'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout />}>
        <Route index element={<DashBoard />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Route>
    )
  )
  return (
    <div className='App'>
      {/* <Product /> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
