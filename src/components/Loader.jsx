import { progress } from "framer-motion";
import {Html, useProgress} from "@react-three/drei";
const Loader = () => {
  const {progress} = useProgress()
  return (
    <Html>
      <span className="canvas-load"></span> 
      <p style={{fontSize:30, color:"white", fontWeight: 400, marginTop:"8rem", width:"2vw" }  }>
      {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader