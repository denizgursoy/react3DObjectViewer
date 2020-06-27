import ReactDOM from 'react-dom'
import Scene from "./Scene"
import ModelLoader from './ModelLoader'
import React,{useState} from "react"

function App() {
  const [selectedObject, setSelectedObject] = useState({});

 function renderElement(){
    if(selectedObject.type == text)
       return(

        <div>
        <h3>{text}</h3>
       <h5>TT Bina : Ankara </h5>
       <h5>Boyut : En (0.8m) Boy (2m) Derinlik (0.5m) </h5>
       <h5>Router Sayisi : 9 </h5>
      </div>
       );
     

 }

 var text="Rack is selected";
  return (
    <>


    
      <Scene>
        <ModelLoader file="scene.gltf" onClick={()=>{setSelectedObject({type:text})}}   />
      </Scene>
      
      <div className="infoPanel">
        { renderElement() }
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
