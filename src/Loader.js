import { Html, useProgress } from '@react-three/drei'


export default function Loader() {
    const { progress } = useProgress()

    return(
        <div className="ids-wrapper">
            {progress} % loaded
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>

    )
}