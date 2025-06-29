import React from 'react';

function NotFound(){
    return(
        <div className='container p-5'>
         <div className='row text-center'>
         
         <h1 className='mt-5'>
            405
             couldn’t find that page.
         </h1>
         <p>We couldn’t find the page you were looking for. Visit Zerodha’s home page</p>
         {/* <button
          className='p-2 btn btn-primary fs-5'
          style={{width:"20%",margin:"0 auto"}}>GO Home</button> */}

      </div>
        
    </div>
 
    );
}

export default NotFound;