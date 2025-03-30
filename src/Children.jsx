import { useState, useEffect } from 'react'
import {Postcomponent} from './Post'
import './App.css'


function App() {
  const [showTimer, setShowTimer] = useState(false);
  
    return <div style={{display:'flex'}}>
      <Card>
        <div style={{background:"black", color:"white"}}>
          What do you want to post?
          <br /><input type={"text"}/>
        </div>
      </Card>
      
      <Card>
        <div>Hi there</div>
      </Card>
    </div>
}

 function Card ({children}){
  return <div style={{background:"black", color:"white", display:"flex",flexDirection:"row", padding:10, margin:10}}>
    {children}
  </div>
 }


export default App;