import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import EditNote from './pages/EditNote/EditNote';
import CreateNote from './pages/CreateNote/CreateNote';
import SingleNote from './pages/SingleNote/SingleNote';
import NotFound from './pages/NotFound/NotFound';
import { AppProvider } from './AppContext';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContainer = ()=>{
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/:id" element={<SingleNote/>} />
         <Route path="/editnote" element={<EditNote/>} />
         <Route path="/addnote" element={<CreateNote/>} />
         <Route path="*" element={<NotFound/>} />
       </Routes>
       <ToastContainer position="top-right" autoClose={2000} closeOnClick />
    </BrowserRouter>
 );
}

function App() {
   return(
      <AppProvider>
         <AppContainer/>
      </AppProvider>
   )
}

export default App;
