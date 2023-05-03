import {OrbitControls , Environment  , useEnvironment, Html , useProgress } from "@react-three/drei"
import { useEffect, useMemo, useRef, useState , Suspense} from "react"
import { useLoader , useThree , useFrame ,} from '@react-three/fiber'
import * as THREE from 'three'
// import Loader from "./Loader";

export default function Experience({handleBtnVisibility,cubemapIndex}) {


    const [envmapIndex , setEnvmapIndex ] = useState(0);
    const [currentEnvMap , setcurrentEnvMap ] = useState(null);
    const [portalVisibility , setportalVisibility ] = useState(true);

    
    const texture1 = useLoader(THREE.TextureLoader, './cubemap/Exterior_360-min.png')
    const texture2 = useLoader(THREE.TextureLoader, './cubemap/Entertainment room_V002-min.png')
    const texture3 = useLoader(THREE.TextureLoader, './cubemap/Game room-min.png')
    const texture4 = useLoader(THREE.TextureLoader, './cubemap/Living_Room_V001.jpg')


    useEffect(() => {

        if(cubemapIndex === 0) {
            setEnvmapIndex(0)
            setcurrentEnvMap(texture1)
            setportalVisibility(true);
            handleBtnVisibility("hidden")

        }
    },[cubemapIndex])

    useEffect(() => {

         if(envmapIndex === 0){


            setcurrentEnvMap(texture1)

        }else{

            if(envmapIndex === 1){

                setcurrentEnvMap(texture2)

            }
    
            if(envmapIndex === 2){
    
                setcurrentEnvMap(texture3)
    
            }
    
            if(envmapIndex === 3){
    
                setcurrentEnvMap(texture4)
  
            }

            setportalVisibility(false);
            handleBtnVisibility("show")
        }

    },[envmapIndex])


    
    const { camera, gl } = useThree()

    useFrame((state, delta) =>
    {
      //  console.log(state.camera.position)
    
        // groupRef.current.rotation.y += delta
    })


    const handlePortalEvent = (index) => {

        setEnvmapIndex(index)
    }
    return(
        <>

            <OrbitControls makeDefault/>

            {/* <Environment background map={envMap} /> */}


            <mesh >
                <sphereGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={currentEnvMap} side={THREE.BackSide}  />
            </mesh>



            <ambientLight />



                {

                    portalVisibility &&
                        <group>

                            <>
                            <Html transform={true}  position={[5.030,0,-4.670]} rotation={[0,-1.140,0]} >
                                <div className="portal portal1" onClick={() => handlePortalEvent(1)}>
                                    <span>Connected Home</span>
                                    {/* <div className="img-bx">
            
                                    <img  src="Screenshot 2023-05-03 114956.png"/>
            
                                    </div> */}
                                </div>    
                            </Html> 
            
        
                            
                            <Html transform={true}  position={[6.580,0,-1.190]}  rotation={[0,-1.460,0]}  >
                                <div className="portal portal2" onClick={() => handlePortalEvent(2)}>
                                <span>Gaming</span>
            
                                    {/* <img  src="Screenshot 2023-05-03 115057.png"/> */}
                                </div>    
                            </Html> 
                        
        
        
                    
                            <Html transform={true}  position={[6.840,0,2.680]}  rotation={[0,-1.510,0]}  >
                                <div className="portal portal3" onClick={() => handlePortalEvent(3)}>
                                <span>Entertainment</span>
            
                                {/* <img  src="Screenshot 2023-05-03 115206.png"/> */}
                                </div>    
                            </Html> 
                            </>
                           </group>

                }


        </>
    )
}