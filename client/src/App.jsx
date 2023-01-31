import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import {Home,CreatePost, Navbar} from './pages'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './App.css'

function App() {

  return <>
  <BrowserRouter>
  <Navbar/>
  <main className='sm:p-8 py-8 px-4 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/create-post' element={<CreatePost/>} />
  </Routes>
  </main>
  </BrowserRouter>
  <ToastContainer />
  </>
}

export default App
