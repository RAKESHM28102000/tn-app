// import axios from 'axios';
import React, { useState } from 'react';

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
function handelSubmit(event){
  console.log(form);
  alert("succesfully submitted");
  alert("your name:"+form.name+",your emailId: "+form.email+",your Mobile No: "+form.mobileNo +", your Note: "+form.message);

      //  try{
      //      await axios.post("http://localhost:3000",{form})
      //      }
      //  catch(e){
      //       console.log(e);    
      //       }

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
      <div className="container-fluid" >
        <h3 >CONTACT US</h3>
        <div className="container">
        <form  className="form" action="/" method="post">
          <div>
          <label className="form-label">Name</label>
          <input onChange={setform} type="text" name="name" value={form.name} className="form-control" placeholder="name"></input>
          </div>
          <br/><hr/>
        <div>
          <label className="form-label" >EmailId</label>
          <input onChange={setform} type="email" name="email" value={form.email} className="form-control" placeholder="email id"/>
        </div>
        <br/><hr/>
        <div>
          <label className="form-label" >MobileNo</label>
          <input onChange={setform} type="number" name="mobileNo" value={form.mobileNo} className="form-control" placeholder="Mobile Number"/>
        </div>
        {/* <br/><hr/>
        <div>
         <label className="form-label">Gender</label>
          <select onChange={setform} name="gender">
            <option  value="male">Male</option>
            <option  value="female">Female</option>
            <option  value="others">Not Interested</option>
          </select> 
        </div> */}
        <br/><hr/>
        <div onClick={e=>setisclicked(true)}>
        <label className="form-label">Message</label>
        <textarea onChange={setform} name="message" value={form.message}  rows={isclicked?3:1} cols="30" placeholder="Write here.."></textarea>
      </div>
       <br/>
          <button type="submit" onClick={handelSubmit} className="submit btn-xl btn-dark">submit</button>
        </form>
   
      </div>
     
        {/* <button className="btn btn-lg btn-block btn-outline-dark download-buttens" type="button"><i className="fa-brands fa-apple"></i> Download</button>
        <button className="btn btn-lg btn-block btn-outline-dark download-buttens" type="button"><i className="fa-brands fa-google-play"></i> Download</button>
      */}   
  
    </div>
      </section>
  )
}

export default Form;