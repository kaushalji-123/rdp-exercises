import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import Divbox from "./Components/Divbox";
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <hr class="bold-hr"/>

        <div className="heading">
          <h1>Sending Money to Abord Has Never Been Cheaper</h1>
          <p>
            send money with nio limit to over 140 contries . Enjoy the live exchange 
            <br />rate with our flat $2 fee adn a slick app that's made for you !
          </p>
          <Button></Button>
          <Divbox></Divbox>
        </div>
        
    </div>
  );
}

export default App;
