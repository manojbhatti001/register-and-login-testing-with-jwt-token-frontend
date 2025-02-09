import logo from './logo.svg';
import './App.css';
import Form from './Component/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';


function App() {
  return (
    <>
      <Router>
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;