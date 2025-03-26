import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Love from "./Love"

const Project = () => {

   return (

      <Canvas camera={{ position: [0, 2, 5] }} style={{width: "40px",height:"40px"}}>
         <ambientLight intensity={0.6} />
         {/* 光源的强度，值范围通常是 0 到 1 */}
         <directionalLight position={[2, 2, 2]} intensity={1} />
         <Love />
         <NewOrbitControls />
      </Canvas>
   )


}
const NewOrbitControls = () => {
   const { camera } = useThree();
   const handleChange = () => {
      console.log("位置",camera.position)
      setTimeout(() => {
         camera.position.set(0, 2, 5); // 设置新的相机位置
         camera.updateProjectionMatrix(); // 更新投影矩阵
      }, 500);
   }
   return <OrbitControls onEnd={handleChange} enableDamping="true" dampingFactor="0.9"/>
}
export default Project;