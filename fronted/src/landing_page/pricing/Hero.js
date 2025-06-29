import React from 'react';

function Hero (){
    return(
        <div className='container'>
            <div className='row p-5 mt-5 text-center'>
                 <h1>Charges</h1> 
                 <h4 className='mt-3 fs-5' style={{color:"#9B9B9B"}}>List of all charges and taxes</h4>
                 </div>.
                 <div className='row p-4 mt-5 text-center'>
                 <div className='col-4 p-5'>
                    <img src='media\Image\pricingEquity.svg'></img>
                    <h1 className='fs-3'>Free equity delivery</h1>
                    <p className='text-muted p-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                 </div>
                 <div className='col-4 p-5'>
                    <img src='media\Image\intradayTrades.svg'></img>
                    <h1 className='fs-4'>Intraday and F&O trades</h1>
                    <p className='text-muted p-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
 
                 </div>
                 <div className='col-4 p-5'>
                    <img src='media\Image\pricingEquity.svg'></img>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='text-muted p-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
 
                 </div>
            </div>
        </div>
    );
}

export default Hero;