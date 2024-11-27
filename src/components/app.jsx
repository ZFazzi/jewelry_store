import Gallery from '../components/profile.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/home.jsx';
import About from '../pages/about.jsx';
import Jewelry from '../pages/jewelry.jsx';
import Navbar from '../navbar.jsx';
import Footer from '../footer.jsx';
import ColorPicker from '../pages/colors.jsx';
function App() {
    return (
        <>
            <BrowserRouter>
            <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/jewelry" element={<Jewelry/>} />
                    <Route path="/colors" element={<ColorPicker/>} />
                </Routes>
            <Footer></Footer>
            </BrowserRouter> 
        </>
    );
}
export default App;
