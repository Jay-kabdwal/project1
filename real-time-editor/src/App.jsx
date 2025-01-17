
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import './App.css';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <div>
        <Toaster position="top-center" 
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88',
            },
            style:{
              background : 'gray',
              font:'bold',
              color:'white',
            }
          }
        }
        }
        
        />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" 
          element = {<Home/>}></Route>
          
          <Route path = "/editor/:roomid" 
          element = {<EditorPage/>}></Route>
        </Routes>
      </BrowserRouter>

    
    </>
  )
}

export default App
