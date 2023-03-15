import React from 'react';


function Invite() {
  return (<section id="contact">
    <div className="container-fluid" sx={{display:"flex",justifyContent:"center",margin:20}}>
       <h2>Invitation</h2>
       <p>lets Do It</p>
      <div class="row">  
             <div class="col-lg-4 col-md-6 pricing-column" >
                  <div class="card">
                   <div class="card-header"><h3>Contact-1</h3></div>
                    <div class="card-body">
                     <img class="img-items" width="40%" height="40%" sx={{borderRadius:"30%"}} src="./images/IMG-20230314-WA0009.jpg" alt='cont-1'/>
                     <p>person</p>
                     <button class="btn btn-lg btn-block btn-dark button-in-cart" type="button">Message</button>
                    </div>
                </div>
              </div>
          <div class="col-lg-4 col-md-6 pricing-column" >
               <div class="card">
                     <div class="card-header"><h3>Contact-2</h3></div>
                     <div class="card-body">
                     <img class="img-items" width="40%" height="40%" src="./images/IMG-20230314-WA0009.jpg" alt='cont-2'/>
                     <p>person</p>
                      <button class="btn btn-lg btn-block btn-dark button-in-cart" type="button">Message</button>
                      </div>
               </div>
           </div>
           <div class="col-lg-4 col-md-6 pricing-column" >
             <div class="card">
               <div class="card-header"><h3>Contact-3</h3></div>
                 <div class="card-body">
                 <img class="img-items" width="40%" height="40%" src="./images/IMG-20230314-WA0009.jpg" alt='cont-3'/>
                 <p>person</p>
                 <button class="btn btn-lg btn-block btn-dark button-in-cart" type="button">Message</button>
                 </div>
              </div>
           </div>
     </div>
 </div>
 </section>
    )
}

export default Invite;