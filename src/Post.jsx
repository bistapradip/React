
const style= {width: 300, backgroundColor:"white", borderRadius: 5, borderColor: 'gray', borderWidth:1, padding: 20}

export function Postcomponent({name, subtitle, time, image, description}){
    return <div style={style}>
    <div style={{display: "flex"}}>
      <img src={"https://logotyp.us/file/buddha-air.svg"}  style={{
        width: 80,
        height: 80,
        borderRadius: 20
      }} />
       <div style={{fontSize:12, marginLeft:10, marginTop:10}}>
        <b>
          {name}
        </b>
        <div>{subtitle}</div>
        {time !== undefined && <div style={{display:'flex'}}>
        <div>{time}</div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5hUy9ZxjHNHJsEQKyiUk-UGvz8bvudfb0aeVNj_a0r4BPZ_V8RCu&usqp=CAE&s"
        style={{
          width:20,
          height:20,
        }}/>
        </div>} 
       </div>
    </div>
    <div style={{marginLeft: 10}}>{description}</div>
    </div>
   
  }

  // const Tooglemessage = () => {
  //   const[notification, setNotification] = useState(0);
  //   return (
  //     <div>
  //     <button onClick={() => setNotification(notification+1)}>Increase count</button>
  //     {notification}
  //     {/* {notification && <p>This message is conditionally rendered</p>} */}
  //     </div>
  //   )
      
    
  // }