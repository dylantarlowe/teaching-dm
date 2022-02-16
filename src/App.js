import logo from './logo.svg';
import './App.css';
import TotalRevealhome from './Images/TotalRevealhome.jpeg';
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <p>LOGO</p>
        <p>Contact Us</p>
        <p>About</p>
        <p>Get Involved</p>
        <p>Donate</p>
        <p>Store</p>
      </div>
      <div className="home-background-image">
        <img className="image" src={TotalRevealhome} />
      </div>
    </div>
  );
}

export default App;
