/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 love.glb 
*/

import React, { useRef ,useState,useContext} from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'
import MyContext from '../../Context'; 

export default function Model(props) {
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/models/love.glb`)
  const { data, setData } = useContext(MyContext);
  const [scale, setScale] = useState(4);
  const [color,setColor]=useState("black")
  const originalScale=useRef(4)
  const handleClick = () => {
    setScale(5); // 点击后设置缩放为 2
    setColor("red")
    setData(!data)
    console.log("data",data)
    setTimeout(() => {
      setScale(originalScale.current); // 1 秒后恢复原始缩放值
    }, 250);
  };
  return (
    
    <group {...props} dispose={null} scale={scale}>
      <mesh 
      geometry={nodes.texture_v100001.geometry} 
      material={new MeshStandardMaterial({ color})}
      rotation={[Math.PI / 2, 0, 0]} 
      onClick={handleClick} // 添加点击事件
      />
      
    </group>
    
    
  )
}

useGLTF.preload(`${process.env.PUBLIC_URL}/models/love.glb`)
