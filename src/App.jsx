import { useState } from 'react'
import {Postcomponent} from './Post'
import './App.css'


function App() {

  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <Postcomponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
    />
  )

  function addPost(){
    setPosts([...posts, {
      name: "Summit Air",
      subtitle: "250 followers",
      time: "4m ago",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5hUy9ZxjHNHJsEQKyiUk-UGvz8bvudfb0aeVNj_a0r4BPZ_V8RCu&usqp=CAE&s",
      description: "Helping to develop rural community of Nepal"
    }] )
  }
  
  return (
   <div style={{background: "#dfe6e9", height: "100vh"}}>
    <button onClick={addPost}>Add Post</button>
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems: "center"}}>
      <div style = {{display: "flex", flexDirection: "column", alignItems: "center", gap: "20px"}}>
          {postComponents}
        </div>
    </div>
   </div>
  )
}

const style= {width: 300, backgroundColor:"white", borderRadius: 5, borderColor: 'gray', borderWidth:1, padding: 20}



export default App;