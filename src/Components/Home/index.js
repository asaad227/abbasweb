
import { Link } from 'react-router-dom';
import logo from "../Home/logo.png";
import Acc from "../Home/3992745.jpg"

import './index.css';

function Home() {
  return (
    <div className="App">
   <div className='header'>
    <img src={logo} className="App-logo" alt="logo" />
    <h3>Gulamabbas & Co</h3>
</div>
<div className='main-display-box'>
<div className='txt-getInTouch'>
<p className='part-one'>
  Accounting
  <br></br>
  You Can
  <br></br>
  Count On
  </p>
  <p className='part-two'>
  Get started
  <br></br>
  with a free
  <br></br>
  consultation
  <br></br>
  !
</p>

<li><button><Link to="/contact">Get in touch</Link></button></li>
</div>
<div className='txt-getInTouch'>
<img src={Acc} className="Acc" alt="Acc" />
</div>
</div>



<footer className='footer-para'>
        <p>
          Website under construction - please check back soon!
        </p>
      More info: <a href="mailto:info@gulamabbasaccounts.co.uk">info@gulamabbasaccounts.co.uk
        </a>
  
     
</footer>
    </div>
  );
}

export default Home;
