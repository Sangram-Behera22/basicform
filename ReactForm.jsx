import React,{useState} from 'react'
import './CSS/ReactForm.css'


function ReactForm() {
   
    const [first, setfirst] = useState("");
    const [second, setsecond] = useState("");
    const [allEntry,updateAllEntry] = useState([]);
    function Submit(){
      const newEntry = {first:first,second :second};
      if(first !== "" && second !== ""){
        const newEntry = {first:first,second :second};
        updateAllEntry([...allEntry,newEntry]);
        setfirst('');
        setsecond('');
      }
      else if(first == '' || second == ''){
         alert("please fill email or password");
      }
      else{
        alert("please fill email and password");
      }
      
        
    }
  
  return (
    <div className='container'>
          <div className="row">
            <div className="col-md-12">
               <div className="row1"> 
                <div className='inputField'>
                    <span >Email</span>
                    <input type="email" placeholder='example@demo.com' value={first} onChange={(e)=>setfirst(e.target.value)}/>
                </div>
                <div className='inputField'>
                    <span>Password</span>
                    <input type="password" placeholder='Demo@123' value={second} onChange={(e)=>setsecond(e.target.value)}/>
                </div> 
                <div className='inputField'>
                    <input type="submit" value="submit" onClick={Submit}/>
                </div>
                
                </div>   
                <div className="row2">
                     {
                        allEntry.map((item)=>{
                          return  <p class="show">Email : {item.first} And Password : {item.second} </p>
                        })
                     }
                </div>
            </div>
          </div>
          
    </div>
  )
}

export default ReactForm;