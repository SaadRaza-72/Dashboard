import './App.css'
import Dashboard from './components/Dashboard'
import About from './components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Charts from './assets/Charts/Charts'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Dashboard /></>
    },
    {
      path: "/about",
      element: <><About /></>
    },
    {
      path: "/Charts",
      element: <><Charts /></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
