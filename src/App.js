import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from './components/Routes/Inicio/Inicio';
import Trabalhos from './components/Routes/Trabalhos/Trabalhos';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ErrorPage from './components/Routes/ErrorPage/ErrorPage';
import Imagem from './components/Routes/Trabalhos/Imagem';



function App() {
  return (

    <Router basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="trabalhos" element={<Trabalhos/>} />
        <Route path=":imagemid" element={<Imagem/>} /> 

            
       
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
       <Footer /> 
    </Router>
    
  );
}

export default App;