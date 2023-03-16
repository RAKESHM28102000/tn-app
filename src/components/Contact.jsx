import React from 'react';

function Contact() {
  return (<section id="contact">
    <footer>
     <div className="footerClass">
         {/* <address class="address" >
                   <h4>Conference Secretariat</h4>
                   <h5>Dr.Unkown</h5>
                   <p></p>
                   <p>+91 00000000</p>
         </address> */}
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


         <p>Copyright @ TANPSYCON 2023 </p>
    </div>
   </footer>
   </section>
  )
}

export default Contact;