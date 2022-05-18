import './App.css';
import Header from './components/Header.js';
import { Footer } from './components/Footer.js';
import Items from './components/Items';

function App() {
  return (
    <div className="App">
      <Header />
      <Items/>
      <Footer />
    </div>
  );
}


export default App;
