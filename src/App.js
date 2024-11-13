import './App.css';
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
function App() {
  return (
    <>
    <main className='my-3'>
    <Header/>
    <Container>
      <h2>E commerce</h2>
      <HomeScreen/>

    </Container>
    </main>

    <Footer/>
    </>
  );
}

export default App;
