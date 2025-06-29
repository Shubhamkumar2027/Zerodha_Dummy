import React from 'react';

function Awards(){
    return (
     <div className='container mt-5 mb-5'>
        <div className='row'>

            <div className='col-6 p-5' >
                <img src='media\Image\largestBroker.svg'></img>
            </div>
            <div className='col-6 p-5 mt-5'>
                <h1>Largest stoke broker in India</h1>
                <p className='mb-5'> 2+ million Zerodha clients contribute to over 15% of all retail
                    order volumes in India daily by trading and  investing in:
                </p>
                <div className='row'>
                    <div className='col-6'>
                    <ul>
                      <li>Futures and Option</li>
                      <li>Commodity derivatives</li>
                      <li>Currency derivatives</li>
                    </ul>
                    </div>
                    <div className='col-6'>
                     <ul>
                      <li>Stokes & IPOs</li>
                      <li>Direct mutual funds</li>
                      <li>Bonds and Gov. Securities</li>
                    </ul>
                    
                    </div>

                </div>
                <img src='media\Image\pressLogos.png' style={{width:"80%"}}></img>
            </div>
        </div>

     </div>
    );
}

export default Awards;