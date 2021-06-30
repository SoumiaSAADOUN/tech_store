import './App.css';
import phone from './assets/phone.png'
import "./actions/phone"

function App() {
  return (
    <div className="App">
      
       <div className='container'>
         <img src={phone} alt='phone'></img>
         <p>Disponibilité  <span id="count"> </span></p>
         <button id='buy_now'>Acheter maintenant</button>

       </div>
    </div>
  );
}

export default App;
