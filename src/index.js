import ReactDOM from 'react-dom'
import Scene from "./Scene"
import ModelLoader from './ModelLoader'
import React,{useState} from "react"
import { Vector3 } from 'three';

function App() {
  const [selectedObject, setSelectedObject] = useState({});

 function renderElement(){
    if(selectedObject.type === text){
      return(

        <div>
        <h3>{text}</h3>
       <h5>TT Bina : Ankara </h5>
       <h5>Boyut : En (0.8m) Boy (2m) Derinlik (0.5m) </h5>
       <h5>Router Sayisi : 9 </h5>
      </div>
       );
    }else if (selectedObject.type!=null){
      return(

      <div>
      <h3>{selectedObject.type}</h3>
     <h5>TT Bina : Ankara </h5>
     <h5>Boyut : En (0.011m) Boy (0.01m) Derinlik (0.05m) </h5>
 
    </div> );
    }
    
     

 }

 var text="Rack is selected";
  return (
    <>
      <Scene>
        <ModelLoader file="/assets/gltf/server_rack/scene.gltf" onClick={()=>{setSelectedObject({type:text})}}   position={new Vector3(0,1,0)}   />
        <ModelLoader file="/assets/gltf/router/scene.gltf" onClick={()=>{setSelectedObject({type:"D link modem is selected"})}}  position={new Vector3(2,0,0)}   scale={new Vector3(0.002,0.002,0.002)} rotation={new Vector3(0,0.1,0)}   />
      </Scene>
      
      <div className="infoPanel">
        { renderElement() }
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
