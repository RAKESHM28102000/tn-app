import React from "react";
import Post from "./Post"
import { Box } from '@mui/material';
const Content=[{
  title:"Chengalpattu district-1",
  image:"https://img.traveltriangle.com/blog/wp-content/uploads/2017/08/mahabalipuram.jpg",
  content:"Chengalpattu district came into existence on 29.11.2019, when it was carved out of the erstwhile Kancheepuram district. Chengalpattu district being part of the Kancheepuram district until recently and being in close geographical proximity to the city of Kancheepuram which is a cultural hub for the region, has undergone through almost all the phases of history which Kancheepuram has witnessed. From 600 AD to 900 AD the region was under the Pallava rule. It was during the Pallava reign that the Chengalpattu region attained the maximum height of prosperity and cultural glory. The temple architecture, as illustrated by the rock cut temple of Mamallapuram and other temples belonging to the contemporary period along the east coast, was at its excellence during the Pallava period."
},
{title:"Chengalpattu district-2",
image:"https://shekharsrivastavaofficial.files.wordpress.com/2020/11/descent_of_the_ganges_01.jpg?w=1568",
content:"Another important  phase of the history of Chengalpattu district is the one when the region was reigned  by the Vijaynagara Empire from 1336 AD to 1675 AD. The town of Chengalpattu was formerly a capital of the kings of Vijayanagar after they were defeated by the Deccan sultanate in the battle of Talikota in 1565. The fortress at Chengalpattu, built by the Vijayanagara kings in the 16th century was of much strategic importance owing to the swamp surrounding it and the lake situated beside it.  Chengalpattu was taken by the French in 1751 and was retaken in 1752 by the British Governor Robert Clive."
},
{title:"Chengalpattu Medical College history",
image:"https://www.cmccpt.ac.in/images/img/logo-1.png",
content:" The history of the Chengalpattu Medical College dates back to days before 1965 when this was a District Head Quarters hospital with its building in the town. In 1965, the Government of Tamil Nadu upgraded this District Headquarters hospital as a teaching institution with 250 beds for clinical training. Vedachalam Mudaliar, the then Chairman of Chengalpattu Municipality, donated a vast area, which is in pocession of this institution. Today the college is under the affiliation of The TN Dr.MGR Medical University, Chennai, State of TamilNadu, India, and is wholly administered by the Government of State of TamilNadu. The Institute is a Medical Teaching Institute Recognised by the Medical Council of India,New Delhi, India. The Medical school trains nearly 500 Under Graduate and 100 Post Graduate from around the country in various Medical Departments. This 50-years old institution was the 6th of its kind to be started in Tamil Nadu."
},
{title:"DEPARTMENT OF PSYCHIATRY",
image:"./images/IMG-20230314-WA0009.jpg",
content:"The Department of Psychiatry affiliated to Chengalpattu Medical College is one of the dynamic departments in the clinical side of the hospital. Mental health can affect daily life, relationships, and even physical health. Mental health also includes a person-s ability to enjoy life - to attain a balance between life activities and efforts to achieve psychological resilience. So the motive of our department is to cater the mental health needs of the population, remove the stigma with respect to Mental Health and to promote mental health as a whole both in the individual and community level. It was budded in the year of 1998 with one Assistant and Senior Resident."
}

]

function Feed(){
  return (<section id="feed">
  <Box sx={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
   {Content.map(function(post){
      return (<Post image={post.image} 
              title={post.title} 
             content={post.content}
      />) })
   }
  </Box>
  </section>
  )
}



export default Feed;