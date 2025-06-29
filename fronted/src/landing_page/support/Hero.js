import React from 'react';
 
function Hero (){
   return(
     <section className='container-fluid' id='supportHero'>
        <div className='p-5' id='suppotRapper'>
           <h4 className=''>
           Support Portal
           </h4> 
           <a href=''>Track tickets</a>       
       </div>
       <div className=' row p-5 m-2'>
         <div className='col-6 p-3'>
            <h1 className='fs-4'>Search for an answer or browse help topics to create a ticket</h1>
            <input className='p-2' placeholder='Eg: how do i activate F&O, why order getting rejected...'/><br/>
            <a href=''>Track account opening</a> 
            <a href=''>Track segment activation</a>
            <a href=''>Intraday margins </a>
            <a href=''>Kite user manual</a>
         </div>
         <div className='col-6 p-3'>
            <h1 className='fs-4'>Featured</h1>
            <ol>
               <li className='m-4'><a href='' className='p-2'>Rights Entitlements listing in May 2025</a></li>
               <li className='m-4'><a href=''className='p-2'>Offer for sale (OFS) – May 2025</a></li>


            </ol>
         </div>       
       </div>
      </section>

   );
}

export default Hero;