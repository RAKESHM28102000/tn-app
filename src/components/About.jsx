import React from 'react';


function About() {
  return (<section id="about">
    <div class="container">
    <div class="row">
        <div class="col-lg-6 col-md-12">
            <img className="imageInAbout" src="./images/IMG-20230314-WA0008.jpg" alt="about"/>
        </div>
        <div class="col-lg-6 col-md-12">
           <h1>ABOUT US</h1>
           <p>
            Chengalpattu district came into existence on 29.11.2019, when it was carved out of the erstwhile Kancheepuram district. Chengalpattu district being part of the Kancheepuram district until recently and being in close geographical proximity to the city of Kancheepuram which is a cultural hub for the region, has undergone through almost all the phases of history which Kancheepuram has witnessed. From 600 AD to 900 AD the region was under the Pallava rule. It was during the Pallava reign that the Chengalpattu region attained the maximum height of prosperity and cultural glory. The temple architecture, as illustrated by the rock cut temple of Mamallapuram and other temples belonging to the contemporary period along the east coast, was at its excellence during the Pallava period.
           </p>
           {/* <button class="btn btn-lg btn-block btn-info  about-button"><a href="https://www.cmccpt.ac.in/psychiatry" target="blank">Get More</a></button> */}
        </div>
    </div>
</div>
 </section>
  )
}

export default About