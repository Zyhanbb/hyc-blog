import React from "react";

function Child(props) {
  console.log("Child 组件渲染了-",props);

  return <button onClick={props.onClick}>子组件按钮</button>;
}

export default Child;
