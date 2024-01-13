import React, {useState} from 'react';
import libary from '../lib';
import BurgerMenu from '../Navburger/BurgerMenu';


export default function Service() {
    const [data,] = useState(libary);
    console.log("i am the data", data);
  return (
    <div>
    <BurgerMenu/>   
        <h1>Service</h1>
        <div className='services'>
        <div className='services-box'>
        {data.map((item) => {
            return (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <img width={200} height={200} src={item.img} alt={item.alt} />
                    <button>{item.button}</button>
                </div>
            )   
        }
        )}
        </div>
        </div>

    </div>
  )
}
