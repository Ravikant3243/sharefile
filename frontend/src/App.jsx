
import './App.css'
import { useEffect, useRef,useState } from 'react'
import uploadFile from './services/api.js';
function App() {
 const fileInputRef=useRef();
const [file, setFile]=useState(null);

const handleClick=()=>{
  fileInputRef.current.click();
}
const handleChange=(e)=>{
 console.log(e.target.files[0]);
  setFile(e.target.files[0]);
}
  useEffect(()=>{
            const   getImage = async()=>{
             if(file){
               const data=  new FormData();
                data.append('name',file.name);
                data.append('file',file);
                const response= await uploadFile(data);
                 console.log(response);
             }

          }
           getImage();

  },[file])
  return (
    <>
    
     <div className="main-wrapper" style={{ backgroundImage: `url('https://images.pexels.com/photos/23547/pexels-photo.jpg')` }}>
      <div className="container">
        <div className="wrapper">
           <h1 >file sharing app!</h1>
           <p>upload and share the download link!</p>
           <button onClick={handleClick}>Upload</button>
           <input type="file" style={{ display: 'none' }} ref={fileInputRef} onChange={handleChange}/>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
