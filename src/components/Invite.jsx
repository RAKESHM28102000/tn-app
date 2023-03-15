import React from 'react';


function Invite() {
  return (<section id="contact">
    <div className="container-fluid" sx={{display:"flex",justifyContent:"center",margin:20}}>
       <h2>Invitation</h2>
       <p>lets Do It</p>
      <div className="row">  
             <div className="col-lg-4 col-md-6 pricing-column" >
                  <div className="card">
                   <div className="card-header"><h3>Contact-1</h3></div>
                    <div className="card-body">
                     <img className="img-items" width="40%" height="40%" sx={{borderRadius:"30%"}} src="./images/IMG-20230314-WA0009.jpg" alt='cont-1'/>
                     <p>person</p>
                     <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button">Message</button>
                    </div>
                </div>
              </div>
          <div className="col-lg-4 col-md-6 pricing-column" >
               <div className="card">
                     <div className="card-header"><h3>Contact-2</h3></div>
                     <div className="card-body">
                     <img className="img-items" width="40%" height="40%" src="./images/IMG-20230314-WA0009.jpg" alt='cont-2'/>
                     <p>person</p>
                      <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button">Message</button>
                      </div>
               </div>
           </div>
           <div className="col-lg-4 col-md-6 pricing-column" >
             <div className="card">
               <div className="card-header"><h3>Contact-3</h3></div>
                 <div className="card-body">
                 <img className="img-items" width="40%" height="40%" src="./images/IMG-20230314-WA0009.jpg" alt='cont-3'/>
                 <p>person</p>
                 <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button">Message</button>
                 </div>
              </div>
           </div>
     </div>
 </div>
 </section>
    )
}

export default Invite;