import './App.css';
import { Canvas } from '@react-three/fiber'
import Experience from './Experience';
import { useState , Suspense } from 'react';
// import Loader from './Loader';

import { Html, useProgress } from '@react-three/drei'


function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress()
  console.log(progress)
  return (<Html center>
        <div className="ids-wrapper">
            <div className="lds-ripple">

                <div></div>
                <div></div>

                <p>{progress} % loaded</p>

            </div>
        </div>
  </Html>)
}

function App() {

  const [visibilitycls , setVisibility ] = useState("hidden")
  const [cubemapIndex , setCubemapIndex ] = useState(null)

  const handleBtnVisibility = (status, index) => {

      setVisibility(status)
      setCubemapIndex(index)
      setCubemapIndex(null)

  }


  const handleExitBtn = () => {
    setCubemapIndex(0)
  } 
  return (
    <>
      <button className={`${visibilitycls} btn`} onClick={handleExitBtn}>Exit</button>
      {/* <Loader /> */}
      <Canvas camera={{ position: [0, 0, 0.1] }}>

        {/* <Suspense fallback={<Loader />}> */}

          <Experience  handleBtnVisibility={handleBtnVisibility} cubemapIndex={cubemapIndex}/>

        {/* </Suspense> */}
      </Canvas>


    </>



  );
}

export default App;
