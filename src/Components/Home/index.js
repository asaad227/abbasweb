
import Nav from '../Nav';
import logo from './abbasLogo.png';
import './index.css';

function Home() {
  return (
    <div className="App">
    <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Website under construction - please check back soon!
        </p>
      More info: <a href="mailto:info@gulamabbasaccounts.co.uk">info@gulamabbasaccounts.co.uk
        </a>
      </header>
    </div>
  );
}

export default Home;
