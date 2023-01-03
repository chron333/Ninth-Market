import logo from './NMNewLogo.svg';
import './App.css';
import Header from './Header';
import contact from './Contact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>

      {/* <body> */}
        <img src={logo} className="App-logo" alt="logo" style={{ width: '400px', height: '400px' }} />
        <div>
          <h1 className="title">Website in Development</h1> {/* heading */}
          {/* <p className="text"></p> */}
        </div>
        <a
          className="App-link"
          href="https://www.instagram.com/ninthmarket/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out our Instagram @NinthMarket
        </a>
      {/* </body> */}
    </div>
  );
}


export default App;
