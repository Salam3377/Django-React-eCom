import { Container } from 'react-bootstrap'


import Header from './components/Header'
import Footer from './components/Footer';
import HomeScreen from './components/screens/HomeScreen';


function App() {
  return (
    <div>
      <Header />
      <main className='py-3'> {/* here classname to create some padding */}
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
