import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import router from './route/Route';

function App() {
  return (
    <div className="">
     <RouterProvider router={router} />
     <ToastContainer />
    </div>
  );
}

export default App;
