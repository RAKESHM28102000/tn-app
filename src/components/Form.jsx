import axios from 'axios';
import React, { useState } from 'react';
import Navbar from "./Navbar";

function Form() {

  const [forms,setforms]=useState([]);


function addForm(newform){
  console.log(newform);
  return (setforms(prevalue=>[...prevalue,newform]))
}
console.log(forms);



  const [form,setForm]=useState({
    name:"",
    email:"",
    mobileNo:"",
    message:""
  });

function  setform(event){
  const{name,value}=event.target;
  setForm(function(prevalue){
    return {...prevalue,[name]:value}
  
  });
}

  async function handelSubmit(event){
  console.log(form);

       try{
           await axios.post("http://localhost:3000",{form})
           }
       catch(e){
            console.log(e);    
            }

   addForm(form);
  setForm({
    name:"",
    email:"",
    mobileNo:"",
    message:""
  });
event.preventDefault();

}

// const [addrtype, setAddrtype] = useState(["Male", "Female", "others"])
// const Add = addrtype.map(Add => Add )
const[isclicked,setisclicked]=useState(false);
  return(<section id="report">
      <div class="container-fluid">
        <h3 >CONTACT US</h3>
        <div class="container">
        <form  class="form" action="/" method="post">
          <div>
          <label class="form-label">Name</label>
          <input onChange={setform} type="text" name="name" value={form.name} class="form-control" placeholder="name"></input>
          </div>
          <br/><hr/>
        <div>
          <label class="form-label" >EmailId</label>
          <input onChange={setform} type="email" name="email" value={form.email} class="form-control" placeholder="email id"/>
        </div>
        <br/><hr/>
        <div>
          <label class="form-label" >MobileNo</label>
          <input onChange={setform} type="number" name="mobileNo" value={form.mobileNo} class="form-control" placeholder="Mobile Number"/>
        </div>
        {/* <br/><hr/>
        <div>
         <label class="form-label">Gender</label>
          <select onChange={setform} name="gender">
            <option  value="male">Male</option>
            <option  value="female">Female</option>
            <option  value="others">Not Interested</option>
          </select> 
        </div> */}
        <br/><hr/>
        <div onClick={e=>setisclicked(true)}>
        <label class="form-label">Message</label>
        <textarea onChange={setform} name="message" value={form.message}  rows={isclicked?3:1} cols="30" placeholder="Write here.."></textarea>
      </div>
       <br/>
          <button type="submit" onClick={handelSubmit} class="submit btn btn-dark">submit</button>
        </form>
   
      </div>
     
        {/* <button class="btn btn-lg btn-block btn-outline-dark download-buttens" type="button"><i class="fa-brands fa-apple"></i> Download</button>
        <button class="btn btn-lg btn-block btn-outline-dark download-buttens" type="button"><i class="fa-brands fa-google-play"></i> Download</button>
      */}   
  
    </div>
      </section>
  )
}

export default Form;