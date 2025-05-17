
import React from "react";
import './../styles/App.css';

const App = () => {
  const[log,setLog]=React.useState(false);
  const Loggin=({onlogin})=>{
 
 return(
  <div>
 <labele>Username:</labele>
 <input type="text"/>
 <br></br><br></br>
 <label>Password:</label>
 <input type="text"/>
 <br></br><br></br>
 <button onClick={onlogin}>login</button>
 </div>
 );
};
return(
  <div>
    {log ?(
      <p>You are logged in !</p>
      ):(
        <Loggin onlogin={()=>setLog(true)}/>
    )}
  </div>
)
}
export default App
