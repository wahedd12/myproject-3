// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import SampleOne from './Samples/SampleOne';





function App() {
 

const [appear, setAppear] = useState (false)
const pop= () => {
  if ( appear == true ){
    setAppear (false)
  }else{
    setAppear(true)
  }
}

  return (
    <div className="App">
    
    <div>

             <header>
        
               <div className='company'>
                <h3>WASPO co-op</h3> 
               </div>
               
                <div className="oke">
           <ul>
               
                    <li><a href="ok">Home</a>
                    <ul>
                        <li><a href="sample.html">homepage</a></li>
                    </ul>
                    </li>
                    <li><a href="ok">About us</a></li>
                    <li><a href="ok">Service</a>
                        <ul>
                            <li><a href="ok">consultation</a></li>
                            <li><a href="ok">free trial</a></li>
                            <li><a href="ok">test app</a>
                            <ul>
                               <li><a href="quiz.html">test A</a></li>
                               <li><a href="quiz2.html">test B</a></li>
                            </ul>

                            </li>
                            
                         </ul></li>
                     <li><a href="ok">Contact</a></li>
                    
                    <li><a href="ok">Help</a></li>
                    <button className="btnlogin-popup"onClick={pop} >login&Register</button>
                </ul>
   
    </div>
    
       </header>
       

   <button className="btnlogin-popup"onClick={pop} >login&Regis ter</button>
   
                     

  {
     appear && (<SampleOne />)
}   
    </div>

    </div>
  );
}

export default App;
