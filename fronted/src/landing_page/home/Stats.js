import React from 'react';

function Stats(){
    return(
       <div className='container p-5'>
           <div className='row p-5' >
            <div className='col-6 p-2'>
                <h1 className='fs-2 mb-5'>Trust with confidence</h1>

                <h3 className='fs-4'>Customer-first always</h3>
                <p className='text-muted'>That why 1.3+ crore customer trust Zerodha with ₹3.5+ lakh
                    crores worth of equity investements.
                </p>
                
                <h3 className='fs-4'>No spam or gimmicks</h3>
                <p>No gimmicks,spam, "gamificataion", or annoying push notification.
                    High quality apps that you use at your pace,the way you like. 
                </p>
            
                <h3 className='fs-4'>The Zerodha Universe</h3>
                <p>No just an app ,but a whole eccosystem.Our investements in 30+ fintech startups
                    offer you tailored services specific to your needs.
                </p>
                
                <h3 className='fs-4'>Do better with money</h3>
                <p>With initiative like Nudge and skill Switch , we don't just facilitate
                    transactions, but actively help you do better with your money
                </p>
            </div>
            <div className='col-6 p-5' >
                <img src='media\Image\ecosystem.png' style={{width:"100%"}}></img>
                <div className='text-center'>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
</a>
                    <a href=''> Try kits demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
</a>
                </div>
              </div>
           </div>
       </div>
    );
}

export default Stats;