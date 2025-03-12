import logo from './logo.svg';
import './App.css';
import AllRouter from './component/AllRouter';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRouter/>
      <Footer/>
    </div>
  );
}

export default App;
