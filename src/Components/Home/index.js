
import { Link } from 'react-router-dom';
import Nav from '../Nav';

import './index.css';

function Home() {
  return (
    <div className="App">
    {/* <Nav/> */}
      <header className="App-header">
      <div className='boxItem'>
<p>
  Accounting
  <br></br>
  You Can
  <br></br>
  Count On
  <br></br>
  Get started
  <br></br>
  with a free
  <br></br>
  consultation
  <br></br>
  !
</p>
<div>
<li><button><Link to="/contact">Contact</Link></button></li>
</div>

</div>
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
