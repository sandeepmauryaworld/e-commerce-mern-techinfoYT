import './App.css';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
import ProductDetails from './screen/ProductDetails';
function App() {
  return (
    <BrowserRouter>
    <main className='my-3'>
    <Header/>
    <Container>
      <Routes>

      <Route path='/'  element={<HomeScreen/>} />
      <Route path='/product/:id'  element={<ProductDetails/>} />

      </Routes>
    </Container>
    </main>

    <Footer/>
    </BrowserRouter>
  );
}

export default App;
