import React, { useState, useCallback } from "react";
import Child from "./Child";
const Password = ()=>{
   const [count, setCount] = useState(0);

   // 正常写法：每次组件更新，handleClick 都是新的，导致子组件重新渲染
   // const handleClick = () => { console.log("clicked"); };
 
   // 使用 useCallback：只有 count 变化时，handleClick 才会更新
   const handleClick = useCallback(() => {
     console.log("clicked");
   }, []); // 依赖项是 count

   return (
     <div>
       <h1>Count: {count}</h1>
       <button onClick={() => setCount(count + 1)}>增加</button>
       <Child onClick={handleClick} />
     </div>
   );
}
export default Password;