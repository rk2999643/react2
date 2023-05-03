
import React, {useState} from "react";
 import "./components/style.css"

function App() {
   const [allFormData,setAllFormData] = useState([]);
   const [formData , setFormData] = useState({
    name:"",
    department:"",
    rating:"", 

   });
   const handleChange = (event) => {
    setFormData({ ...formData,[event.target.name]: event.target.value});
   };
   
   
  return( 
  <>
     <div className="bg"> 
       <div className="heading"><b>EMPLOYEE FEEDBACK FORM </b></div>
       <form onSubmit={(event)=>{
        event.target.reset();
       }}>
        <label className="name">
          Name : 
        <input type='text' name='Name' className="name_ip" onChange={handleChange} />
       </label>
       <br/>
       <label className="name">
          Department : 
        <input type='text' name='Department' className="name_ip" onChange={handleChange} />
       </label>
       <br/>
       <label className="name">
          Rating : 
        <input type='text' name='Rating' className="name_ip" onChange={handleChange} />
       </label>
       <br/>
       <button type='button' className="submit" 
       onClick={(e) =>{
         e.preventDefault();
        const tempobj = [...allFormData];
         setAllFormData ([...allFormData,formData]);
       
         console.log("All FormData:", allFormData);
         setFormData({
          name:"",
          department:"",
          rating:"",
         });
       }}
       >Submit</button>
       </form>
       {
          allFormData.map((value,index)=>{
            return (
              <div className="output">
              <div key={index} className="underop">
                Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}
              </div> 
              </div> 
            );
          })
       }

      </div>
  </>
  )  
}

export default App;
