import{BrowserRouter, Route,Routes} from'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import Aboutus from './pages/Aboutus'
import SignUp from './pages/SignUp'
import Header from './component/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/About-us' element={<Aboutus/>}/>
    </Routes>
    </BrowserRouter>
  )
}
