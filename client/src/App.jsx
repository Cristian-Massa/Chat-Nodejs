import './App.css'
import Home from './layout/home/page'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './layout/login/page'
import RegisterPage from './layout/register/page'
import NotFound from './layout/404Error/404'
import axios from 'axios'
function App() {

  axios.create({
    baseURL: 'http:localhost:3001'
  })
  
  return (
    <div>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
