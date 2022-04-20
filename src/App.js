import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import DisplayFormData from './components/DisplayFormData';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<DisplayFormData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
